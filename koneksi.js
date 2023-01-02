const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('uas_integrasi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Berhasil terhubung');
} catch (error) {
    console.error('Gagal terhubung DB : ', error);
}

module.exports=sequelize;