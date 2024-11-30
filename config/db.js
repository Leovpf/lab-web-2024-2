const mongoose = require("mongoose");
const envConfig = require("./envs-config");

const connectDB = async () => {
  try {
    await mongoose.connect(envConfig.databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexão bem-sucedida com o MongoDB");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:", err.message);
    process.exit(1); // Finaliza a aplicação se a conexão falhar
  }
};

module.exports = connectDB;