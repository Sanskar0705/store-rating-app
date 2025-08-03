const pool = require("../config/db");

exports.addUser = async (req, res) => {
  const { name, email, password, address, role } = req.body;
  try {
    const hashed = await require("bcrypt").hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users (name, email, password, address, role) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, email, hashed, address, role]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addStore = async (req, res) => {
  const { name, email, address } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO stores (name, email, address) VALUES ($1, $2, $3) RETURNING *",
      [name, email, address]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.dashboard = async (req, res) => {
  try {
    const users = await pool.query("SELECT COUNT(*) FROM users");
    const stores = await pool.query("SELECT COUNT(*) FROM stores");
    const ratings = await pool.query("SELECT COUNT(*) FROM ratings");
    res.json({
      total_users: users.rows[0].count,
      total_stores: stores.rows[0].count,
      total_ratings: ratings.rows[0].count,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
