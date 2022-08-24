import React from 'react';
import EniEnchere from '../components/EniEnchere';
import LienLogin from '../components/LienLogin';
import ListeEncheres from '../components/ListeEncheres';
import { Flex, Spacer } from '@chakra-ui/react';

const Homes = () => {
    return (
        <div className="index_settings">
        <Flex>
            <EniEnchere/>
            <Spacer />
            <LienLogin/>
        </Flex>
           <ListeEncheres/>
        </div>
    );
};

export default Homes;