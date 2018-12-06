// Version can be specified in package.json
import React from 'react';
import {Alert,Button, View,TouchableOpacity, Text,ImageBackground, StyleSheet,ListView,TouchableHighlight,ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

export default class Guia extends React.Component {
   
  render() {
      return (
       <ImageBackground 
          style={styles.container}
          source={require('../../assets/fondo.jpg')}>
         <ScrollView>
            <Text>
Para que en el mes del amor y la amistad puedas dar todo el cariño que quieras necesitas tener un órgano completamente saludable.
Es por ello que resulta necesario modificar nuestros hábitos alimenticios y de este modo ayudar a reducir los riesgos hacia nuestro corazón. Intentar, en el caso de los hombres, que la circunferencia de la cintura no sea mayor a los 94 cm y, en el caso de las mujeres, a 80 cm, es una tarea por la que debemos empezar. Para ello, el Instituto de Nutrición y Salud Kellogg’s® te sugiere aquí algunas medidas prácticas que te serán de gran ayuda:
Realiza cinco comidas al día: tres principales y dos refrigerios entre cada una de ellas. El contar con una alimentación fraccionada contribuirá de manera positiva sobre el nivel de lípidos en la sangre.
Evita saltarte alguna comida ya que ello te provocará una sensación de hambre desmesurada que terminará en un exceso de comida.
Favorece la carne magra, desgrasa los caldos en frío y quita la grasa visible así como la piel de aves antes de cocinarlas.
Prefiera las leches descremadas por encima de las enteras, así como los quesos blancos (panela o cottage) antes que los quesos maduros.
Amplía el consumo de pescado a la semana y elige aquellos que provengan de aguas frías (atún, sardina y salmón), éstos te aportaran ácidos grasos omega 3, necesarios para el cuidado del corazón.
Modera tu consumo de alimentos altos en colesteroles y grasas saturadas, tales como los embutidos, mariscos, vísceras y en general cualquier derivado cárnico.
Favorece el uso de aceites vegetales antes que la mantequilla o margarina a la hora de cocinar.
Aumenta la fibra en tu alimentación y consume por lo menos 5 porciones de fruta y verdura al día, intentando que sean crudas y con cáscara.
Arroz, pasta, pan y cereales te serán de gran ayuda.
Aumenta el consumo de leguminosas (frijoles, lentejas, habas o garbanzos) a tres veces por semana.
El tabaquismo y el alcoholismo son factores de alto riesgo. El primero por ser un detonante de enfermedades cardiovasculares y el segundo por favorecer el aumento de triglicéridos y el consecuente sobrepeso que aumenta el riesgo de desarrollar hipercolesterolemia.
Procura cocinar con la menor cantidad de sal posible. Evita los alimentos enlatados y los embutidos, ya que estos en su mayoría contienen grandes cantidades de sodio por cada porción. Prefiere el agua natural antes que el refresco, estos también contienen cantidades considerables de sodio.
Evita los guisos excesivamente grasosos como los capeados y empanizados, en su lugar recurre a los cocidos en parrilla, a la plancha, asados, hervidos o al vapor.
Nunca reutilices los aceites que se usan para freír ya que al recalentarlos ocasiona la producción de sustancias que se asocian con enfermedades como el cáncer.
Realiza diariamente un mínimo de 30 a 45 minutos de ejercicios aeróbicos (caminar, correr, nadar, bicicleta). Esto te ayudará a regular y mejorar los niveles plasmáticos del colesterol y mantener un peso saludable.
Cuida tus niveles de estrés, éste te puede llevar a estados de ansiedad que se relacionan con el aumentos de colesterol. Es importante que aprendas a relajarte y llevar un ritmo de vida más tranquilo y saludable.
            </Text>
          </ScrollView>
        </ImageBackground>
      )
    }   
}
const styles = StyleSheet.create({
    cell: {
      borderBottomWidth: 1,
      borderBottomColor: 'red',
      paddingTop: 20,
      paddingBottom: 20,
      alignItems: 'center'
    },
    container: {
       flex: 1,
        alignItems: 'center',
    },

    button: {
    alignItems: 'center',
    backgroundColor: '#ffff44',
    padding: 20
  },
     welcome: {
        fontSize: 20,
        textAlign: 'center',
        color: 'red',
        margin: '10' 
    } ,
     instructions: {
       textAlign: 'center',
        color: 'purple',
        marginBotton: 5

     },
     texto:{
    //marginTop:5, // altura de arriva
        fontSize: 5,  //  da tamaño a la letra
        height: 5,
        width: 5,
        top:  5
  }
  
 });
