const Sequelize = require('sequelize');

const koneksi = new Sequelize('sistem_pusat', 'root', '', {
       host: 'localhost',
       port: '3307',
       dialect: 'mariadb',
       dialectOptions:{
              useUTC:false, 
              timezone: "Etc/GMT+7"
       }
});

koneksi.authenticate().then(() => {
       console.log('Berhasil Konek ke Database');
}).catch(err => {
       console.error('Gagal Konek ke Database : ', err.message);
});

module.exports = koneksi;