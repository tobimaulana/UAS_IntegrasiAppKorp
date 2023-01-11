var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Fakultas = koneksi.define('fakultas', {
       id_fakultas: {
              type: Sequelize.STRING,
              allowNull: false,
              primaryKey:true
       },
       nama_fakultas: {
              type: Sequelize.STRING,
              allowNull: false
       }
},
{
       timestamps:true,
       freezeTableName: true
}
);
 
module.exports=Fakultas;