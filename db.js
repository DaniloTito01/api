const Sequelize  = require('sequelize');


  
  const sequelize = new Sequelize('cadastro1', 'adm', 'Daniel11', {
      host: 'mysql669.umbler.com',
      dialect:  'mysql' /* one of | 'mariadb' | 'postgres' | 'mssql' */
    });
  
    sequelize.authenticate().then(function(){
      console.log('OK');
    }).catch(function(err){
      console.log('ERRO' + err);
    })
  
    const Cliente = sequelize.define('lead',{
      nome:{
        type : Sequelize.STRING,
      },
      email:{
        type : Sequelize.STRING,
      },
      telefone:{
        type : Sequelize.STRING,
      },
      estado:{
        type : Sequelize.STRING,
      },
      cidade:{
        type : Sequelize.STRING,
      },
      emailbox:{
        type : Sequelize.STRING,
      },
      whatsbox:{
        type : Sequelize.STRING,
      }
    });
  
  //Cliente.sync({force:true});
  
  

module.exports =Cliente;