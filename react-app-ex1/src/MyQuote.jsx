import React from 'react';
import Paragrafo from './Paragrafo'
import Citacao from './Citacao'

function QuoteMaker() {
    return (
        <blockquote>
            <Paragrafo />
            <Citacao />
            <Paragrafo />
        </blockquote>
    );
};

export default QuoteMaker;