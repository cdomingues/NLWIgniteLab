import { HStack, IconButton, VStack, useTheme, Text, Heading, FlatList } from "native-base";
import Logo from '../assets/logo_secondary.svg';
import { SignOut } from "phosphor-react-native";
import { Filter } from "../components/Filter";
import  {Order, OrderProps} from '../components/Order';
import { useState } from "react";

export function Home(){
    const [statusSelected, setStatusSelected] = useState<'open'|'closed'>('open');
    const {colors} = useTheme();
    const [orders,setOrders] = useState<OrderProps[]>([
        {id: '123',
        patrimony: '908877',
        when:'26/08/2022',
        status: 'open'}
    ])

    return(
        <VStack flex={1} pb={6} bg={"gray.700"}>
            <HStack 
            w="full"  
            justifyContent="space-between"  
            alignItems="center"
            bg="gray.600"
            pt={12}
            pb={5}
            px={6}

            >
            <Logo/>
            <IconButton 
            icon={<SignOut size={26} color={colors.gray[300]} />}
            />
            </HStack>

            <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
                <Heading color="gray.100">Meus Chamados</Heading>
            <Text color="gray.200">
                4
            </Text>
            </HStack>
            <HStack space={3} mb={8}>
                <Filter 
                type="open"
                title="em andamento"
                onPress={()=>setStatusSelected('open')}
                isActive={statusSelected === 'open'}

                />
                <Filter 
                type="closed"
                title="finalizados"
                onPress={()=>setStatusSelected('closed')}
                isActive={statusSelected === 'closed'}
                />
            </HStack>
            <FlatList 
            data={orders}
            keyExtractor={item => item.id}
            renderItem={({item})=> <Order data={item}/>}  
            />
            </VStack>

            


        </VStack>
    )
}