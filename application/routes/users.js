const express=require('express');

const router=express.Router();

const users = [
    {
      id:1,  
      nom: 'Lisangola',
      prenom: 'Christian',
      email: '',
      poste: 'Homme de ménage',
      numeroTelephone: ['+243908888888'],
      estMarie: false,
      pays: 'RDCongo',
    },
    {
        id:2,
      nom: 'Motoba',
      prenom: 'Claude',
      email: 'claude@gmail.com',
      poste: 'Architecte infrastructures',
      numeroTelephone: ['+243818885454', '+243844457484'],
      estMarie: true,
      pays: 'Liban',
    },
    {
        id:3,
      nom: 'Nyembo',
      prenom: 'Thesy',
      email: 'thesy.nyembo@gmail.com',
      poste: 'DevOPS & Développeuse Fullstack',
      numeroTelephone: ['+2438108488888', '+243844145444'],
      estMarie: false,
      pays: 'Djibouti',
    },
    {
        id:4,
      nom: 'Gael',
      prenom: 'Mapwata',
      email: 'mapwata.gael@gmail.com',
      poste: 'Administrateur systèmes & Réseaux',
      numeroTelephone: ['+243818897188', '+243844445744'],
      estMarie: true,
      pays: 'Inde',
    },
    {
        id:5,
      nom: 'Makengo',
      prenom: 'Stanislas',
      email: 'makengo.stanislas@gmail.com',
      poste: 'Chef de projet digital',
      numeroTelephone: ['+243814428888', '+243844446734'],
      estMarie: true,
      pays: 'Algérie',
    },
    {
        id:6,
      nom: 'Ndovia',
      prenom: 'Ruth',
      email: 'ruth.ndovia@gmail.com',
      poste: 'Administrateur systèmes & Réseaux',
      numeroTelephone: ['+24381458888', '+243844434444'],
      estMarie: false,
      pays: 'RDCongo',
    },
    {
        id:7,
      nom: 'Bondjali',
      prenom: 'Chris',
      email: '',
      poste: 'Cordonier',
      numeroTelephone: ['+24390999898'],
      estMarie: true,
      pays: 'RDCongo',
    },
  ];
  

router.delete('/:id',function(req,res){
    const id=(req.params.id)-1;
    users.splice(id,1);
    res.status(200).json(users);
    console.log('suppression');
    
});

router.post('/',(req,res)=>{
    const user={
    id:req.body.id,  
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    poste: req.body.poste,
    numeroTelephone: req.body.numeroTelephone,
    estMarie: req.body.estMarie,
    pays: req.body.pays,
    };

    users.push(user);
    res.status(200).json(users);
});

module.exports=router;