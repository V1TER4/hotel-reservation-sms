import express, { Request, Response } from "express";
import dotenv from "dotenv";
import reservationRoutes from "./routes/reservationRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Para aceitar JSON no corpo das requisições
app.use("/reservations", reservationRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
