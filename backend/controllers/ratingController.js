const pool = require("../config/db");

exports.submitRating = async (req, res) => {
  const { store_id, rating } = req.body;
  const user_id = req.user.id;

  try {
    const existing = await pool.query("SELECT * FROM ratings WHERE user_id=$1 AND store_id=$2", [user_id, store_id]);
    if (existing.rows.length) {
      await pool.query("UPDATE ratings SET rating=$1 WHERE user_id=$2 AND store_id=$3", [rating, user_id, store_id]);
      return res.json({ message: "Rating updated" });
    }

    await pool.query("INSERT INTO ratings (user_id, store_id, rating) VALUES ($1, $2, $3)", [user_id, store_id, rating]);
    res.json({ message: "Rating submitted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getRatingsByOwner = async (req, res) => {
  const owner_id = req.user.id;
  try {
    const store = await pool.query("SELECT id FROM stores WHERE email = (SELECT email FROM users WHERE id=$1)", [owner_id]);
    const store_id = store.rows[0].id;

    const result = await pool.query(`
      SELECT u.name, u.email, r.rating
      FROM ratings r
      JOIN users u ON r.user_id = u.id
      WHERE r.store_id = $1
    `, [store_id]);

    const avg = await pool.query("SELECT AVG(rating) FROM ratings WHERE store_id = $1", [store_id]);

    res.json({ ratings: result.rows, average: avg.rows[0].avg });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
