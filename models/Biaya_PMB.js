var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Biaya_PMB = koneksi.define('biaya_pmb', {
       id: {
              type: Sequelize.BIGINT,
              allowNull: false,
              primaryKey:true
       },
       nim: {
              type: Sequelize.STRING,
              allowNull: false
       },
       nama_biaya: {
              type: Sequelize.STRING,
              allowNull: false
       },
       jumlah: {
              type: Sequelize.DOUBLE,
              allowNull: false
       },
       id_angkatan: {
              type: Sequelize.STRING,
              allowNull: false
       },
       gelombang: {
              type: Sequelize.STRING,
              allowNull: false
       },
       id_prodi: {
              type: Sequelize.BIGINT,
              allowNull: false
       },
       tanggal_bayar: {
              type: Sequelize.DATE,
              allowNull: false
       }
},
{
       timestamps:true,
       freezeTableName: true
}
);
 
module.exports=Biaya_PMB;