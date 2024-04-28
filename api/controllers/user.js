// user.js

// Importe as dependências necessárias
import db from "../db.js";

// Declare a função getUser
export const getUser = (_, res) => {
    const q = "SELECT * FROM Databases";

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data.rows);
    });
};
