var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Dosen = koneksi.define('dosen', {
       nip: {
              type: Sequelize.STRING,
              allowNull: false,
              primaryKey:true
       },
       id_matkul: {
              type: Sequelize.INTEGER,
              allowNull: false
       },
       nama_dosen: {
              type: Sequelize.STRING,
              allowNull: false
       },
       alamat: {
              type: Sequelize.DOUBLE,
              allowNull: false
       },
       no_hp: {
              type: Sequelize.BIGINT,
              allowNull: false
       }
},
{
       timestamps:true,
       freezeTableName: true
}
);
 
module.exports=Dosen;