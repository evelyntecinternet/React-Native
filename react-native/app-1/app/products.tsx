import { Text, ScrollView, View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Products() {

    // const ContentList = () => {
    // Dados de exemplo para os itens da lista
    const listProduct = [
        {
            id: 1,
            title: 'Bisteca com ervas',
            description: 'Uma suculenta bisteca grelhada no ponto perfeito, temperada com um mix de ervas frescas como tomilho, alecrim e salsa. A carne é selada para manter seus sucos naturais, garantindo uma experiência saborosa e aromática.',
            image: '../assets/images/Bisteca.jpg', // URL da imagem de exemplo
        },
        {
            id: 2,
            title: 'Macarronada Tradicional',
            description: 'Um prato clássico da culinária italiana, onde o macarrão al dente é generosamente coberto com um molho de carne moída refogada lentamente em tomates frescos, alho e ervas aromáticas. Finalizado com queijo parmesão ralado na hora para um toque de indulgência.',
            image: '../assets/images/macarrom.jpg', // URL da imagem de exemplo
        },
        {
            id: 3,
            title: ' Pato Fatiado com Batatas',
            description: 'Fatias suculentas de peito de pato, com uma combinação reconfortante de batatas cremosas.',
            image: '../assets/images/comid.jpg', // URL da imagem de exemplo
        },
        {
            id: 4,
            title: 'Frango Grelhado à Perfeição',
            description: 'Suculento filé de frango grelhado, temperado com ervas finas e um toque de limão, garantindo um sabor leve e irresistível. Acompanhado por feijão caseiro, cozido lentamente até a perfeição, proporcionando um sabor autêntico e reconfortante.',
            image: '../assets/images/frango.jpg', // URL da imagem de exemplo
        },
        {
            id: 5,
            title: 'Peixe Grelhado à Moda do Chef',
            description: 'Peixe grelhado na perfeição, temperado com ervas aromáticas e um toque de limão, oferecendo um sabor leve e delicioso.',
            image: '../assets/images/comida.jpg', // URL da imagem de exemplo
        },
        {
            id: 6,
            title: 'Bife à Brasileira',
            description: 'Suculento bife grelhado no ponto perfeito, temperado com ervas finas e um toque de alho, acompanhado por tomates frescos e alface crocante, garantindo uma experiência leve e refrescante. ',
            image: '../assets/images/bife.jpg', // URL da imagem de exemplo
        },
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                Menu
            </Text>
            {listProduct.map((item) => (
                <View key={item.id} style={styles.itemContainer}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleProduct}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                </View>                
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center', fontWeight: 'bold', marginBottom: 20, marginTop: 20,
        color: '#0D0D0D', fontSize: 20
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5CF75',
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#FFAD61',
        borderRadius: 8,
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    titleProduct: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 5,
        fontSize: 14,
    },
});



