var express = require('express'); 
const cekToken = require('../middleware.js');
var router = express.Router(); 

//panggil Model Prodi
var Prodi = require('../models/Prodi.js'); 

/* TAMPIL DATA */ 
router.get('/', cekToken, function(req, res, next) { 
    Prodi.findAll().then( data=>{ 
        res.json({ 
            status:true, 
            pesan:"Berhasil Tampil", 
            data:data 
        }); 
    }).catch(err => { 
        res.json({ 
            status:false, 
            pesan:"Gagal Tampil: " + err.message, 
            data:[] 
        }); 
    }); 
});

/* TAMBAH DATA */ 
router.post('/', cekToken, function(req, res, next) { 
    Prodi.create(req.body).then (data=>{ 
        res.json({ 
            status:true, 
            pesan:"Berhasil Tambah", 
            data:data 
        }); 
    }) 
    .catch(err => { 
        res.json({ 
            status:false, 
            pesan:"Gagal Tambah: " + err.message, 
            data:[] 
        }); 
    }); 
}); 
/* UBAH DATA */ 
router.put('/', cekToken, function(req, res, next) { 
    Prodi.update(req.body,{ 
        where:{id_prodi:req.body.id_prodi} 
    }).then ( ()=>{ 
        res.json({ 
            status:true, 
            pesan:"Berhasil Ubah", 
            data: [] 
        }); 
    }) 
    .catch(err => { 
        res.json({ 
            status:false, 
            pesan:"Gagal Ubah: " + err.message, 
            data:[] 
        }); 
    }); 
}); 
/* HAPUS DATA */ 
router.delete('/', cekToken, function(req, res, next) { 
    Prodi.destroy({ 
        where:{id_prodi:req.body.id_prodi} 
    }).then ( ()=>{ 
        res.json({ 
            status:true, 
            pesan:"Berhasil Hapus", 
            data: [] 
        }); 
    }) 
    .catch(err => { 
        res.json({ 
            status:false, 
            pesan:"Gagal Hapus: " + err.message, 
            data:[] 
        }); 
    }); 
}); 

module.exports = router;