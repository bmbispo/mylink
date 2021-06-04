import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, View, Share } from 'react-native';

import { ModalContainer, Container, Header, LinkArea, Title, LongUrl, ShortLinkArea, ShortLinkUrl } from './styles';
import { Feather } from '@expo/vector-icons';
import  Clipboard  from 'expo-clipboard';


export default function ModalLink({ onClose }){

    function copyLink(){
        Clipboard.setString('https://seuLink.com');
        alert('Link copiado com sucesso!');
    }

    async function handleShare(){
        try{
            const result = await Share.share({
                message: `Link: https://seuLink.com`
            });

            if(result.action === Share.sharedAction){
                if(result.activityType){
                    console.log('ActivityType');
                }else{
                    //Compartilhou
                    console.log('Compartilhado com sucesso!')
                }
            }else if(result.action === Share.dismissedAction){
                console.log('Modal fechado')
            }
        }catch(error){
            console.log(error.message);
        }
    }

    return(
       <ModalContainer>
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={{ flex:1 }} ></View>
            </TouchableWithoutFeedback>
           <Container>
                <Header>
                    <TouchableOpacity onPress={onClose} >
                        <Feather
                          name="x"
                          color="#212743"
                          size={30}  
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleShare} >
                        <Feather
                          name="share"
                          color="#212743"
                          size={30}  
                        />
                    </TouchableOpacity>
                </Header>

                <LinkArea>
                    <Title>Link encurtado</Title>
                    <LongUrl numberOflines={1} >https://sujeitoprogramador.com</LongUrl>

                    <ShortLinkArea
                        activeOpacity={1}
                        onPress={copyLink}
                    >
                        <ShortLinkUrl numberOflines={1} >
                            https://bit.ly/aoefd4
                        </ShortLinkUrl>
                        <TouchableOpacity onPress={copyLink}>
                            <Feather
                                name="copy"
                                color="#fff"
                                size={25}
                            />
                        </TouchableOpacity>
                    </ShortLinkArea>
                </LinkArea>

           </Container>

       </ModalContainer> 
    )
}
