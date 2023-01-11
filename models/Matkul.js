var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Matkul = koneksi.define('matkul', {
       id_matkul: {
              type: Sequelize.STRING,
              allowNull: false,
              primaryKey:true
       },
       nama_matkul: {
              type: Sequelize.STRING,
              allowNull: false
       },
       sks: {
              type: Sequelize.CHAR,
              allowNull: false
       },
       semester: {
              type: Sequelize.STRING,
              allowNull: false
       },
       nip: {
              type: Sequelize.STRING,
              allowNull: false
       }
},
{
       timestamps:true,
       freezeTableName: true
}
);
 
module.exports=Matkul;