const pool = require("../config/db");

exports.getAllStores = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT s.*, 
        COALESCE(AVG(r.rating), 0) AS avg_rating
      FROM stores s
      LEFT JOIN ratings r ON s.id = r.store_id
      GROUP BY s.id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
