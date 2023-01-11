var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Prodi = koneksi.define('prodi', {
       id_prodi: {
              type: Sequelize.STRING,
              allowNull: false,
              primaryKey:true
       },
       id_fakultas: {
              type: Sequelize.STRING,
              allowNull: false
       },
       nama_prodi: {
              type: Sequelize.STRING,
              allowNull: false
       }
},
{
       timestamps:true,
       freezeTableName: true
}
);
 
module.exports=Prodi;