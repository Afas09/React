import React from 'react';

const owl = {
    src: 'https://i0.statig.com.br/bancodeimagens/am/1p/m7/am1pm76gmapd6kuuzlxududib.jpg',
    title: 'Owl'
};

function Owl(){
    return (
        <div>
            <h1>{owl.title}</h1>
            <img 
                src={owl.src}
                alt={owl.title}/>
        </div>
    );
}

export default Owl;