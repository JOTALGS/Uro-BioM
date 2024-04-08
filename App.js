import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, ScrollView, Linking, Switch, Image } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Canvas, useFrame, useLoader } from '@react-three/fiber/native';
import { TextureLoader } from 'three';
import pngTexture from './assets/logo_texture.png';
import { printToFileAsync, selectPrinterAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'uro-BioM'}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{title: 'Inicio'}}
        />
        <Stack.Screen
          name="listado"
          component={ListadoScreen}
          options={{ title: 'Listado de biomarcadores' }} // Set the title of the header
        />
        <Stack.Screen
          name="4kscore"
          component={AKscoreScreen}
          options={{ title: 'Calicreínas' }} // Set the title of the header
        />
        <Stack.Screen
          name="selectmdx"
          component={SelectmdxScreen}
          options={{ title: 'Panel genético basado en ARNm' }} // Set the title of the header
        />
        <Stack.Screen
          name="confirmmdx"
          component={ConfirmmdxScreen}
          options={{ title: 'Estudios Epigenéticos' }} // Set the title of the header
        />
        <Stack.Screen
          name="oncotype"
          component={OncotypeScreen}
          options={{ title: 'Genomic Prostate Score (GPS)' }} // Set the title of the header
        />
        <Stack.Screen
          name="decipher"
          component={DecipherScreen}
          options={{ title: 'Genomic Classifier (GC)' }} // Set the title of the header
        />
        <Stack.Screen
          name="buscador"
          component={SearchScreen}
          options={{ title: 'Buscador' }} // Set the title of the header
        />
        <Stack.Screen
          name="SearchResult"
          component={SearchresultScreen}
          options={{ title: 'Biomarcadores' }} // Set the title of the header
        />
        <Stack.Screen
          name="formulario"
          component={FormularioScreen}
          options={{ title: 'Generar Formulario' }} // Set the title of the header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


//Screens
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Canvas camera={{ position: [-2, 2.5, 5], fov: 30 }}>
        <SphereModel />
      </Canvas>
      <Text style={styles.title}>BIOMARCADORES MOLECULARES EN CÁNCER DE PRÓSTATA</Text>
      <Button
        title="Iniciar"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane'})
        }
      />
      <View style={styles.div2}>
        <Text style={styles.subTitle}>Dr. Levin Martinez</Text>
        <Text style={styles.content}>Prof. Titular Cátedra de Urología</Text>
        <Text style={styles.subTitle}>Dr. Fermin Domenech</Text>
        <Text style={styles.content}>Asistente Titular Cátedra de Urología</Text>
      </View>
      <View style={styles.div3}>
          <Text style={styles.subTitle}>Hospital de Clínicas</Text>
          <Text style={[styles.subTitle, { marginTop: '0%' }]}>Dr. Manuel Quintana</Text>
          <Text style={styles.content}>Cátedra de Urología Prof. Dr. Levin Martinez</Text>
          <Text style={styles.content}>Universidad de la República</Text>
          <Text style={styles.content}>Montevideo, Uruguay</Text>
      </View>
    </View>
  );
};

const ProfileScreen = ({navigation}) => {
  return (
  <View style={styles.container}>
    <Canvas camera={{ position: [-2, 2.5, 5], fov: 30 }}>
      <DynamicSphereModel />
    </Canvas>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        style={[styles.buttonInit, { marginTop: '8%' }]}
        onPress={() => navigation.navigate('listado')}>
        <Text style={[styles.buttonText, { marginTop: '4%' }]}>Biomarcadores disponibles</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonInit]}
        onPress={() => navigation.navigate('buscador')}>
        <Text style={[styles.buttonText, { marginTop: '4%' }]}>Busqueda específica</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonInit, { marginBottom: '8%' }]}
        onPress={() => navigation.navigate('formulario')}>
        <Text style={[styles.buttonText, { marginTop: '4%' }]}>Generar formulario</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};

const ListadoScreen = ({ navigation }) => {
  return (
    <View style={styles.containerListado}>
      <Text style={styles.title}>OPCIONES</Text>
      <TouchableOpacity
        style={styles.buttonListado}
        onPress={() => navigation.navigate('4kscore')}>
        <View style={styles.buttonListadoContent}>
          <Image
            source={require('./assets/4kscore.png')}
            style={[styles.image, { resizeMode: 'contain' }]} // Add resizeMode prop
          />
          <Text style={styles.buttonListadoText}>Calicreínas</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonListado}
        onPress={() => navigation.navigate('selectmdx')}>
        <View style={styles.buttonListadoContent}>
          <Image
            source={require('./assets/selectmdx.png')}
            style={[styles.image, { resizeMode: 'contain' }]}
          />
          <Text style={styles.buttonListadoText}>Panel genético basado en ARNm</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonListado}
        onPress={() => navigation.navigate('confirmmdx')}>
        <View style={styles.buttonListadoContent}>
          <Image
            source={require('./assets/confirmmdx.png')}
            style={[styles.image, { resizeMode: 'contain' }]}
          />
          <Text style={styles.buttonListadoText}>Estudios Epigenéticos</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonListado}
        onPress={() => navigation.navigate('oncotype')}>
        <View style={styles.buttonListadoContent}>
          <Image
            source={require('./assets/oncotype.png')}
            style={[styles.image, { resizeMode: 'contain' }]}
          />
          <Text style={styles.buttonListadoText}>Genomic Prostate Score (GPS)</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonListado}
        onPress={() => navigation.navigate('decipher')}>
        <View style={styles.buttonListadoContent}>
          <Image
            source={require('./assets/decipher.png')}
            style={[styles.image, { resizeMode: 'contain' }]}
          />
          <Text style={styles.buttonListadoText}>Genomic Classifier (GC)</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const FormularioScreen = () => {
  let [fecha, setFecha] = useState("")
  let [nombre, setNombre] = useState("")
  let [nacimiento, setNacimiento] = useState("")
  let [cedula, setCedula] = useState("")
  let [medico, setMedico] = useState("")
  let [biopsia, setBiopsia] = useState("")
  let [num_biop, setNumBiop] = useState("0")
  let [resultados, setResultados] = useState("")
  let [fech_tact, setFechaTacto] = useState("")
  let [result_tact, setResTacto] = useState("")
  let [fech_psa, setFechPsa] = useState("")
  let [val_psa, setValPsa] = useState("")
  let [volumen, setVolumen] = useState("")
  let [unidad, setUnidad] = useState("")
  let [raza, setRaza] = useState("")


  const html = `
    <html>
      <body>
        <h3 style="text-align: center; margin-bottom: 2%;">Dia y hora de la extracción de la muestra: ${fecha}</h3>
        <h2 style="margin-bottom: 1.5%;">Informacion del Paciente:</h2>
        <p style="color: #313131; padding: 10;">Nombre del paciente: ${nombre}</p>
        <p style="color: #313131; padding: 10;">Fecha de Nacimiento: ${nacimiento}</p>
        <p style="color: #313131; padding: 10;">C.I.: ${cedula}</p>
        <p style="color: #313131; padding: 10;">Médico Urólogo: ${medico}</p>

        <h2 style="margin-bottom: 1.5%; margin-top: 2%;">Informacion del Clínica:</h2>
        <p style="color: #313131; padding: 10;">Ha habido biopsias previas: ${biopsia}  Cuantas? ${num_biop}</p>
        <p style=" padding: 10;">Resultados:</p>
        <p style="color: #313131; padding: 10;">${resultados}</p>
        <p style="color: #313131; padding: 10;">Fecha del último tacto rectal: ${fech_tact}</p>
        <p style="color: #313131; padding: 10;">Resultado: ${result_tact}</p>
        <p style="color: #313131; padding: 10;">Fecha del último PSA: ${fech_psa} Valor del último PSA: ${val_psa}</p>
        <p style="color: #313131; padding: 10;">Volumen de la próstata: ${volumen} ${unidad}</p>
        <p style="color: #313131; padding: 10;">Raza: ${raza}</p>
        <p style="color: #313131; padding: 10;">Firma del medico de la extracción: ________________________</p>
        <p style="text-align: center; position: fixed; bottom: 0; width: 100%;">Av. Italia 2364 of. 304, Tel: 598 2487 89 95 / Email: infouy@southgenetics.com</p>
      </body>
    </html>
  `;


  const GeneratePDF = async () =>{
    const file = await printToFileAsync({
      html: html,
      base64: false,
    });

    await shareAsync(file.uri);
  };

  return(
    <View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View styles={styles.pdfContainer}>
        <Text>Dia y hora de extracción de muestra :</Text>
        <TextInput style={styles.inputText} value={fecha} placeholder='fecha' onChangeText={(value) => setFecha(value)} />
        <Text>Nombre del paciente:</Text>
        <TextInput style={styles.inputText} value={nombre} placeholder='nombre del paciente' onChangeText={(value) => setNombre(value)} />
        <Text>Fecha de nacimiento:</Text>
        <TextInput style={styles.inputText} value={nacimiento} placeholder='fecha de nacimiento' onChangeText={(value) => setNacimiento(value)} />
        <Text>Documenteo de identidad:</Text>
        <TextInput style={styles.inputText} value={cedula} placeholder='cedula' keyboardType="numeric" onChangeText={(value) => setCedula(value)} />
        <Text>Médico Urólogo:</Text>
        <TextInput style={styles.inputText} value={medico} placeholder='medico urólogo' onChangeText={(value) => setMedico(value)} />
        <Text>Biopsias previas:</Text>
        <View style={[styles.picker, {flexDirection: 'row',}]}>
          <TouchableOpacity
            style={[styles.tab, {width: '50%'}, biopsia === 'Si' && styles.selectedTab]}
            onPress={() => setBiopsia('Si')}
          >
            <Text style={styles.tabText}>Si</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, {width: '50%'}, biopsia === 'No' && styles.selectedTab]}
            onPress={() => setBiopsia('No')}
          >
            <Text style={styles.tabText}>No</Text>
          </TouchableOpacity>
        </View>
        <TextInput style={styles.inputText} value={num_biop} placeholder='cantidad de biopsias' keyboardType="numeric" onChangeText={(value) => setNumBiop(value)} />
        <Text>Resultado biopsia:</Text>
        <View style={[styles.picker, {flexDirection: 'row',}]}>
          <TouchableOpacity
            style={[styles.tab, {width: '20%'}, resultados === 'Benigna' && styles.selectedTab]}
            onPress={() => setResultados('Benigna')}
          >
            <Text style={[styles.tabText, {fontSize: 10}]}>Benigna</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, {width: '20%',}, resultados === 'HGPIN' && styles.selectedTab]}
            onPress={() => setResultados('HGPIN')}
          >
            <Text style={[styles.tabText, {fontSize: 12}]}>HGPIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, {width: '20%'}, resultados === 'ASAP' && styles.selectedTab]}
            onPress={() => setResultados('ASAP')}
          >
            <Text style={[styles.tabText, {fontSize: 12}]}>ASAP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, {width: '20%'}, resultados === 'PIA' && styles.selectedTab]}
            onPress={() => setResultados('PIA')}
          >
            <Text style={[styles.tabText, {fontSize: 12}]}>PIA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, {width: '20%'}, resultados === 'Otro' && styles.selectedTab]}
            onPress={() => setResultados('Otro')}
          >
            <Text style={[styles.tabText, {fontSize: 12}]}>Otro</Text>
          </TouchableOpacity>
        </View>
        <Text>Tacto rectal:</Text>
        <TextInput style={styles.inputText} value={fech_tact} placeholder='fecha del último tacto rectal' onChangeText={(value) => setFechaTacto(value)} />
        <View style={[styles.picker, {flexDirection: 'row',}]}>
          <TouchableOpacity
            style={[styles.tab, {width: '50%'}, result_tact === 'Sospechoso' && styles.selectedTab]}
            onPress={() => setResTacto('Sospechoso')}
          >
            <Text style={styles.tabText}>Sospechoso para Ca Próstata</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, {width: '50%'}, result_tact === 'No sospechoso' && styles.selectedTab]}
            onPress={() => setResTacto('No sospechoso')}
          >
            <Text style={styles.tabText}>No sospechoso para Ca Próstata</Text>
          </TouchableOpacity>
        </View>
        <Text>PSA:</Text>
        <TextInput style={styles.inputText} value={fech_psa} placeholder='Fecha del PSA' onChangeText={(value) => setFechPsa(value)} />
        <TextInput style={styles.inputText} value={val_psa} placeholder='Valor del PSA' keyboardType="numeric" onChangeText={(value) => setValPsa(value)} />
        <Text>Volumen de la próstata:</Text>
        <TextInput style={styles.inputText} value={volumen} placeholder='volumen' keyboardType="numeric" onChangeText={(value) => setVolumen(value)} />
        <Text>Unidad:</Text>
        <View style={[styles.picker, {flexDirection: 'row',}]}>
          <TouchableOpacity
            style={[styles.tab, {width: '50%'}, unidad === 'cc' && styles.selectedTab]}
            onPress={() => setUnidad('cc')}
          >
            <Text style={styles.tabText}>cc</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, {width: '50%'}, unidad === 'grs' && styles.selectedTab]}
            onPress={() => setUnidad('grs')}
          >
            <Text style={styles.tabText}>grs</Text>
          </TouchableOpacity>
        </View>
        <Text>Raza:</Text>
        <View style={[styles.picker, {flexDirection: 'row',}]}>
          <TouchableOpacity
            style={[styles.tab, {width: '25%'}, raza === 'Caucásico' && styles.selectedTab]}
            onPress={() => setRaza('Caucásico')}
          >
            <Text style={[styles.tabText, {fontSize: 12}]}>Caucásico</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, {width: '25%',}, raza === 'Nativo Americano' && styles.selectedTab]}
            onPress={() => setRaza('Nativo Americano')}
          >
            <Text style={[styles.tabText, {fontSize: 12}]}>Nativo Americano</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, {width: '25%'}, raza === 'Afrodescendiente' && styles.selectedTab]}
            onPress={() => setRaza('Afrodescendiente')}
          >
            <Text style={[styles.tabText, {fontSize: 12}]}>Afrodescendiente</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, {width: '25%'}, raza === 'Asiático' && styles.selectedTab]}
            onPress={() => setRaza('Asiático')}
          >
            <Text style={[styles.tabText, {fontSize: 12}]}>Asiático</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button title='Generar PDF' onPress={GeneratePDF} />
      </ScrollView>
    </View>
  );
}

//test screens
const AKscoreScreen = () => {
  const [selectedTab, setSelectedTab] = useState(1); // State to track the selected tab

  const handleTabPress = (tabNumber) => {
    setSelectedTab(tabNumber); // Update the selected tab state
  };

  let tabContent;
  switch (selectedTab) {
    case 1:
      tabContent = (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.tabContentText}>
              El test 4Kscore analiza en sangre el PSA, PSA libre, PSA intacto y calicreína Humana 2 sumado a la edad y tacto rectal.
              Expresa el % de riesgo de cáncer de próstata agresivo.
              {"\n\n"} {/* New line */}
              Mejora el valor predictivo positivo del PSA, disminuye el número de biopsias innecesarias.
              {"\n\n"}
              Punto de corte 7,5 % para decidir la realización de la biopsia
              {"\n\n"}
              Menor a 7,5%, control evolutivo, bajo
              riesgo de un tumor significativo.
              {"\n\n"}
              Ventajas:{"\n"}
              1. Método no invasivo (muestra de sangre){"\n"}
              2. Evita biopsias innecesarias (30-60%){"\n"}
              3. Superior al PSA, PSA L/Total y PSA D para diagnosticar CaP{"\n"}
              4. Capacidad de predecir CaP Gleason 7 o mayor
              {"\n\n"}
              Desventajas:{"\n"}
              1. Mayores costos{"\n"}
              2. Resultados se afectan por inhibidores de la 5 alfa reductasa. Requiere interrupción del tratamiento por 6 meses
              {"\n\n"}
              Referencias:{"\n"}
              1. Mayores costos{"\n"}
              2. Resultados se afectan por inhibidores de la 5 alfa reductasa. Requiere interrupción del tratamiento por 6 meses
              {"\n\n"}
              Solicitar referencias a{" "}
              <Text
                  style={{ color: 'blue', textDecorationLine: 'underline' }}
                  onPress={() => Linking.openURL('mailto:infouy@southgenetics.com')}
              >
                  infouy@southgenetics.com
              </Text>
              {"\n"}
          </Text>
      </ScrollView>
      );
      break;
    case 2:
      tabContent = (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.tabContentText}>
              4KScore mayor a 7,5%: indica biopsia prostática
          </Text>
      </ScrollView>
      );
      break;
    case 3:
      tabContent = (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.tabContentText}>
              Muestra de sangre, sin preparación previa
              {"\n\n"}
              Resultados en 5-7 días
              {"\n\n"}
              Reporte gráfico en español y reporte clínico en inglés
              {"\n\n"}
              No se puede indicar si el paciente está en tratamiento con inhibidores de la alfa 5 reductasa, se requiere interrupción de 6 meses previo
              {"\n\n"}
              No puede haberse realizado un TR durante las 96 horas antes
          </Text>
      </ScrollView>
      );
      break;
    default:
      tabContent = (
      <Text style={styles.tabContentText}>No Content</Text>
      );
  }

  return (
    <View style={styles.containerTabs}>
      <Image
          source={require('./assets/4kscore.png')}
          style={[styles.imageForTest, { resizeMode: 'contain' }]} // Add resizeMode prop
      />
      <Text style={[styles.title, { color: '#0081a1' }]}>Marcadores diagnósticos previos a la primera biopsia prostática</Text>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 1 && styles.selectedTab]}
          onPress={() => handleTabPress(1)}>
          <Text style={styles.tabText}>INFORMACION</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 2 && styles.selectedTab]}
          onPress={() => handleTabPress(2)}>
          <Text style={styles.tabText}>CONDUCTA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 3 && styles.selectedTab]}
          onPress={() => handleTabPress(3)}>
          <Text style={styles.tabText}>LOGÍSTICA</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContent}>{tabContent}</View>
    </View>
  );
}

const SelectmdxScreen = () => {
  const [selectedTab, setSelectedTab] = useState(1); // State to track the selected tab

  const handleTabPress = (tabNumber) => {
    setSelectedTab(tabNumber); // Update the selected tab state
  };

  let tabContent;
  switch (selectedTab) {
    case 1:
      tabContent = (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.tabContentText}>
          Estudio genético en orina, identifica la expresión de HOXC6 y DLX1.
          Modelo multimodal que incorpora los genes como biomarcadores urinarios, suma edad,
          PSA, densidad de PSA, historia familiar e historia de biopsias prostáticas,
          logrando un VPN de 98% y evitando un 53% de biopsias innecesarias.
          {"\n\n"}
          El resultado se expresa como la probabilidad de CaP global y CaP alto riesgo (en%), no existiendo un punto de corte establecido.
          {"\n\n"}
          Ventajas:{"\n"}
          1. Alto VPN para tumores clínicamente significativos{"\n"}
          2 Método no invasivo{"\n"}
          3. Evita repetición de biopsias innecesarias
          {"\n\n"}
          Desventajas:{"\n"}
          1. Mayores costos{"\n"}
          2. No existe un punto de corte establecido que facilite el accionar del urólogo
          {"\n\n"}
          Referencias:{"\n"}
          1. Mayores costos{"\n"}
          2. No existe un punto de corte establecido que facilite el accionar del urólogo
          {"\n\n"}
          Solicitar referencias a{" "}
              <Text
                  style={{ color: 'blue', textDecorationLine: 'underline' }}
                  onPress={() => Linking.openURL('mailto:infouy@southgenetics.com')}
              >
                  infouy@southgenetics.com
              </Text>            
          {"\n"}
          </Text>
      </ScrollView>
      );
      break;
    case 2:
      tabContent = (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.tabContentText}>
              Informa probabilidad (en %) de tumor alto y bajo riesgo
              {"\n\n"}
              Con estos datos decidir biopsia prostática
              {"\n"}
          </Text>
      </ScrollView>
      );
      break;
    case 3:
      tabContent = (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.tabContentText}>
              Muestra orina, después de masaje prostático por medio de TR
              {"\n\n"}
              Resultados en 7 días
              {"\n\n"}
              Reporte en inglés
              {"\n\n"}
              No se puede indicar si el paciente está en tratamiento con inhibidores de la alfa 5 reductasa,
              se requiere interrupción de 6 meses previo
              {"\n\n"}
              PSA Total previo del paciente de no más de 6 meses antigüedad
              {"\n\n"}
              Si hay Biopsia previa, antigüedad mínima de 3 meses
              {"\n\n"}
              Se requiere aportar ultimo valor de PSA total, volumen prostático, antecendentes familiares de CaP, raza
              {"\n"}
          </Text>
      </ScrollView>
      );
      break;
    default:
      tabContent = (
      <Text style={styles.tabContentText}>No Content</Text>
      );
  }

  return (
    <View style={styles.containerTabs}>
      <Image
          source={require('./assets/selectmdx.png')}
          style={[styles.imageForTest, { resizeMode: 'contain' }]} // Add resizeMode prop
      />
      <Text style={[styles.title, { color: '#0081a1' }]}>Marcadores diagnósticos previos a la primera biopsia prostática</Text>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 1 && styles.selectedTab]}
          onPress={() => handleTabPress(1)}>
          <Text style={styles.tabText}>INFORMACION</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 2 && styles.selectedTab]}
          onPress={() => handleTabPress(2)}>
          <Text style={styles.tabText}>CONDUCTA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 3 && styles.selectedTab]}
          onPress={() => handleTabPress(3)}>
          <Text style={styles.tabText}>LOGÍSTICA</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContent}>{tabContent}</View>
    </View>
  );
}

const ConfirmmdxScreen = () => {
  const [selectedTab, setSelectedTab] = useState(1); // State to track the selected tab

  const handleTabPress = (tabNumber) => {
    setSelectedTab(tabNumber); // Update the selected tab state
  };

  let tabContent;
  switch (selectedTab) {
    case 1:
      tabContent = (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.tabContentText}>
          Busca en cada cilindro de la biopsia la metilación de los genes GSTP1, APC y RASSF1 asociados a la presencia de CaP.
          {"\n\n"}
          De encontrar metilación positiva en algún cilindro, se recomienda la re biopsia dirigida al sector del cilindro comprometido.
          {"\n\n"}
          Ventajas:{"\n"}
          1. No invasivo (se analiza el tejido de la biopsia){"\n"}
          2. Sensibilidad 68% y especificidad de 64%{"\n"}
          3. VPN de 90% para CaP y 96% para CaP de Alto Grado{"\n"}
          4.64% menos de biopsias{"\n"}
          5. Guía la re biopsia a la zona donde se encontraron las alteraciones en la metilación
          {"\n\n"}
          Desventajas:{"\n"}
          1. Aumenta los costos
          {"\n\n"}
          Referencias:{"\n"}
          1. Aumenta los costos
          {"\n\n"}
          Solicitar referencias a{" "}
              <Text
                  style={{ color: 'blue', textDecorationLine: 'underline' }}
                  onPress={() => Linking.openURL('mailto:infouy@southgenetics.com')}
              >
                  infouy@southgenetics.com
              </Text>            
          {"\n"}
          </Text>
      </ScrollView>
      );
      break;
    case 2:
      tabContent = (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.tabContentText}>
              Metilación positiva en algún cilindro: indicar biopsia prostática dirigida
              {"\n"}
          </Text>
      </ScrollView>
      );
      break;
    case 3:
      tabContent = (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.tabContentText}>
              Muestra de tejido de la Biopsia que dio resultado negativo (ò HGPIN ò ASAP)
              {"\n\n"}
              Resultados en 20 días
              {"\n\n"}
              Reporte en inglés
              {"\n\n"}
              Antigüedad máxima de la biopsia: 24
              meses
              {"\n"}
          </Text>
      </ScrollView>
      );
      break;
    default:
      tabContent = (
      <Text style={styles.tabContentText}>No Content</Text>
      );
  }

  return (
    <View style={styles.containerTabs}>
      <Image
          source={require('./assets/confirmmdx.png')}
          style={[styles.imageForTest, { resizeMode: 'contain' }]} // Add resizeMode prop
      />
      <Text style={[styles.title, { color: '#0081a1' }]}>Marcadores diagnósticos previos a la primera biopsia prostática</Text>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 1 && styles.selectedTab]}
          onPress={() => handleTabPress(1)}>
          <Text style={styles.tabText}>INFORMACION</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 2 && styles.selectedTab]}
          onPress={() => handleTabPress(2)}>
          <Text style={styles.tabText}>CONDUCTA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 3 && styles.selectedTab]}
          onPress={() => handleTabPress(3)}>
          <Text style={styles.tabText}>LOGÍSTICA</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContent}>{tabContent}</View>
    </View>
  );
}

const OncotypeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(1); // State to track the selected tab

  const handleTabPress = (tabNumber) => {
    setSelectedTab(tabNumber); // Update the selected tab state
  };

  let tabContent;
  switch (selectedTab) {
    case 1:
      tabContent = (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.tabContentText}>
          Analisis genómico que evalúa en la biopsia la expresión de 17 genes
          (12 asociados a diferentes vías de génesis tumoral y 5 genes de referencia).
          {"\n\n"}
          Se indica en pacientes con CaP de bajo o muy bajo riesgo en los que se quiere optar por una vigilancia activa
          ya que es un predictor de tumores con Gleason igual o mayor a 7, tumores no confinados a la próstata,
          recurrencia bioquímica y metástasis a distancia.
          {"\n\n"}
          GPS de bajo o muy bajo riesgo se pueden incluir en vigilancia activa.
          {"\n\n"}
          GPS de riesgo intermedio habrá que proponerles tratamientos radicales
          {"\n\n"}
          Ventajas:{"\n"}
          1. No invasivo (se analiza el tejido de la biopsia){"\n"}
          2. El GPS es un buen marcador pronóstico ya que predice patología adversa y{"\n"}
          recurrencia
          3. Respalda la decisión de Vigilancia Activa
          {"\n\n"}
          Desventajas:{"\n"}
          1. Aumenta los costos{"\n"}
          2. Limitaciones:{"\n"}
          El tejido biopsico no puede haber recibido Radioterapia. El GPS fue validado en
          paciente no tratados con inhibidores de la 5 alfa reductasa.
          NO se conoce si existe o no efecto en el GPS del tratamiento con inhibidores de la 5 alfa reductasa,
          por tanto se recomienda no realizar la prueba en estos pacientes.
          {"\n\n"}
          Solicitar referencias a{" "}
              <Text
                  style={{ color: 'blue', textDecorationLine: 'underline' }}
                  onPress={() => Linking.openURL('mailto:infouy@southgenetics.com')}
              >
                  infouy@southgenetics.com
              </Text>            
          {"\n"}
          </Text>
      </ScrollView>
      );
      break;
    case 2:
      tabContent = (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.tabContentText}>
          GPS de muy bajo riesgo o bajo riesgo: surgerir VA.
          {"\n\n"}
          GPS de riesgo bajo intermedio: sugerir PR o RT (en casos seleccionados puede considerarse terapia focal o vigilancia activa)
          {"\n"}
          </Text>
      </ScrollView>
      );
      break;
    case 3:
      tabContent = (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.tabContentText}>
          Muestra de tejido de la Biopsia, bloque de mayor compromiso tumoral
          {"\n\n"}
          Resultados en 14 días
          {"\n\n"}
          Reporte en inglés
          {"\n\n"}
          Antigüedad máxima de la biopsia: 3 años
          {"\n\n"}
          Se requiere reporte de Anatomía Patológica
          {"\n\n"}
          No se acepta tejido de RTU
          {"\n\n"}
          No se puede realizar sobre tejido que fue sometido a Radioterapia
          {"\n\n"}
          Criterios de Inclusion
          {"\n\n"}
          NCCN Muy bajo riesgo (debe presentar TODOS los siguientes criterios):{"\n"}
          - Gleason Score ≤ 6{"\n"}
          - PSA {"<"} 10 ng/mL{"\n"}
          - Estadio clínico T1c{"\n"}
          - Menos de 3 cilindros/filamentos
          positivos, ≤ 50% compromiso tumoral en cualquier cilindro/filamento{"\n"}
          - PSA densidad {"<"} 0.15 ng/mL/g
          {"\n\n"}
          NCCN Bajo riesgo (debe presentar TODOS
          los siguientes criterios):{"\n"}
          - Gleason Score ≤ 6{"\n"}
          - PSA {"<"} 10 ng/mL{"\n"}
          - Estadio Clínico T1c-T2a
          {"\n\n"}
          NCCN Riesgo intermedio (debe cumplir UNO de los siguientes criterios):{"\n"}
          - Gleason Score ≤ 6, Y{"\n"}
          * Estadio Clínico T2b-T2c, O{"\n"}
          * PSA 10-20 ng/mL{"\n"}
          - Gleason Score 3+4, Y todo lo siguiente:{"\n"}
          * Estadio Clínico T1c-T2c{"\n"}
          * PSA ≤ 20 ng/mL{"\n"}
          - Gleason Score 4+3, Y todo los siguiente:{"\n"}
          * Estadio Clínico T1c-T2c{"\n"}
          * PSA ≤ 20 ng/mL
          {"\n"}
          </Text>
      </ScrollView>
      );
      break;
    default:
      tabContent = (
      <Text style={styles.tabContentText}>No Content</Text>
      );
  }

  return (
    <View style={styles.containerTabs}>
      <Image
          source={require('./assets/oncotype.png')}
          style={[styles.imageForTest, { resizeMode: 'contain' }]} // Add resizeMode prop
      />
      <Text style={[styles.title, { color: '#0081a1' }]}>Marcadores diagnósticos previos a la primera biopsia prostática</Text>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 1 && styles.selectedTab]}
          onPress={() => handleTabPress(1)}>
          <Text style={styles.tabText}>INFORMACION</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 2 && styles.selectedTab]}
          onPress={() => handleTabPress(2)}>
          <Text style={styles.tabText}>CONDUCTA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 3 && styles.selectedTab]}
          onPress={() => handleTabPress(3)}>
          <Text style={styles.tabText}>LOGÍSTICA</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContent}>{tabContent}</View>
    </View>
  );
}

const DecipherScreen = () => {
  const [selectedTab, setSelectedTab] = useState(1); // State to track the selected tab

  const handleTabPress = (tabNumber) => {
    setSelectedTab(tabNumber); // Update the selected tab state
  };

  let tabContent;
  switch (selectedTab) {
    case 1:
      tabContent = (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.tabContentText}>
          El Clasificador Genómico Decipher, evalua la expresión de 22 genes vinculados a diferentes vías biológicas del CaP.
          Brinda información que permite establecer con mayor precisión el riesgo de un tumor localizado,
          y por ende definir con más argumentos el o los tratamientos a realizar.
          {"\n\n"}
          Si el resultado es bajo riesgo genético se puede optar, dependiendo del riesgo clásico,
          por una vigilancia activa o un tratamiento radical.
          {"\n\n"}
          Un resultado de alto riesgo genético sugiere un tratamiento multimodal.
          {"\n\n"}
          Ventajas:{"\n"}
          1 No aumenta invasividad (se utiliza tejido){"\n"}
          2. Nos permite establecer con mayor precisión el riesgo tumoral, y por ende, definir con mayor certeza el tratamiento
          {"\n\n"}
          Desventajas:{"\n"}
          1. Aumenta los costos
          {"\n\n"}
          Referencias:{"\n"}
          1. Aumenta los costos
          {"\n\n"}
          Solicitar referencias a{" "}
              <Text
                  style={{ color: 'blue', textDecorationLine: 'underline' }}
                  onPress={() => Linking.openURL('mailto:infouy@southgenetics.com')}
              >
                  infouy@southgenetics.com
              </Text>
          {"\n"}
          </Text>
      </ScrollView>
      );
      break;
    case 2:
      tabContent = (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.tabContentText}>
          Bajo riesgo y NCCN bajo: sugerir VA.
          {"\n\n"}
          Bajo riesgo y NCCN intermedio o alto: sugerir RT o PR.
          {"\n\n"}
          Alto riesgo y cualqueir NCCN: sugerir terapia intensificada o multimodal
          {"\n"}
          </Text>
      </ScrollView>
      );
      break;
    case 3:
      tabContent = (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.tabContentText}>
          Muestra de tejido de la Prostatectomía Radical, bloque de mayor compromiso tumoral
          {"\n\n"}
          Resultados en 22 días
          {"\n\n"}
          Reporte en inglés
          {"\n\n"}
          Antigüedad máxima del tejido: 5 años
          {"\n\n"}
          Se requiere reporte de Anatomía Patológica
          {"\n\n"}
          No se puede realizar sobre tejido que fue sometido a Radioterapia
          {"\n"}
          </Text>
      </ScrollView>
      );
      break;
    default:
      tabContent = (
      <Text style={styles.tabContentText}>No Content</Text>
      );
  }

  return (
    <View style={styles.containerTabs}>
      <Image
          source={require('./assets/decipher.png')}
          style={[styles.imageForTest, { resizeMode: 'contain' }]} // Add resizeMode prop
      />
      <Text style={[styles.title, { color: '#0081a1' }]}>Marcadores diagnósticos previos a la primera biopsia prostática</Text>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 1 && styles.selectedTab]}
          onPress={() => handleTabPress(1)}>
          <Text style={styles.tabText}>INFORMACION</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 2 && styles.selectedTab]}
          onPress={() => handleTabPress(2)}>
          <Text style={styles.tabText}>CONDUCTA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 3 && styles.selectedTab]}
          onPress={() => handleTabPress(3)}>
          <Text style={styles.tabText}>LOGÍSTICA</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContent}>{tabContent}</View>
    </View>
  );
}


//search screens
const SearchScreen = ({navigation}) => {
  const [isYes, setIsYes] = useState(false);
  const [biopsia, setBiopsia] = useState(false);
  const [option, setOption] = useState('');
  const [risk, setRisk] = useState('');
  const [selectedOption, setSelectedOption] = useState(null); // Initially unset
  const [selectedRiesgo, setSelectedRiesgo] = useState(null); // Initially unset

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const handleRiesgoPress = (option) => {
    setSelectedRiesgo(option);
  };

  const handleSearch = () => {
    // Navigate to SearchResult screen and pass selectedCategory and searchQuery
    //console.log("PSA:", isYes, "/ Biopsia:", biopsia, "/ Resultado:", option, "/ Riesgo:", risk);

    navigation.navigate('SearchResult', { protatect: isYes, biopsia: biopsia, resultado: selectedOption, riesgo: selectedRiesgo });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {marginTop: '10%',}]}>PARÁMETROS DE BUSQUEDA:</Text>
      <View style={styles.dataContainer}>
        { !biopsia && (
          <View style={styles.divSearch2}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Prostatectomía:</Text>
              <View style={[styles.picker, {flexDirection: 'row',}]}>
                  <TouchableOpacity
                    style={[styles.tab, isYes === false && styles.selectedTab]} // Apply selectedTab style conditionally
                    onPress={() => setIsYes(false)}
                  >
                    <Text style={styles.tabText}>No</Text>
                  </TouchableOpacity>                
                  <TouchableOpacity
                    style={[styles.tab, isYes === true && styles.selectedTab]} // Apply selectedTab style conditionally
                    onPress={() => setIsYes(true)}
                  >
                    <Text style={styles.tabText}>Si</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </View>
        )}
        { isYes && (
            <View style={styles.divSearch2}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Result. de la Prostatectomía:</Text>
              <View style={[styles.picker, {flexDirection: 'row',}]}>
                <TouchableOpacity
                  style={[styles.tab, selectedOption === 'Negativo' && styles.selectedTab]} // Apply selectedTab style conditionally
                  onPress={() => handleOptionPress('Negativo')}
                >
                  <Text style={styles.tabText}>Negativo</Text>
                </TouchableOpacity>                
                <TouchableOpacity
                  style={[styles.tab, selectedOption === 'Positivo' && styles.selectedTab]} // Apply selectedTab style conditionally
                  onPress={() => handleOptionPress('Positivo')}
                >
                  <Text style={styles.tabText}>Positivo</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
        )}
        {(selectedOption === 'Positivo') && isYes && (
            <View style={styles.divSearch2}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Riesgo:</Text>
              <View style={[styles.picker, {flexDirection: 'row',}]}>
                <TouchableOpacity
                    style={[styles.tab, selectedRiesgo === 'Bajo' && styles.selectedTab]} // Apply selectedTab style conditionally
                    onPress={() => handleRiesgoPress('Bajo')}
                  >
                    <Text style={styles.tabText}>Bajo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.tab, selectedRiesgo === 'Medio/Alto' && styles.selectedTab]} // Apply selectedTab style conditionally
                    onPress={() => handleRiesgoPress('Medio/Alto')}
                  >
                    <Text style={styles.tabText}>Medio/Alto</Text>
                  </TouchableOpacity>
                </View>
            </View>
        </View>
        )}
        {!isYes && (
            <View style={styles.divSearch2}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Biopsia:</Text>
                <View style={[styles.picker, {flexDirection: 'row',}]}>
                  <TouchableOpacity
                    style={[styles.tab, biopsia === false && styles.selectedTab]} // Apply selectedTab style conditionally
                    onPress={() => setBiopsia(false)}
                  >
                    <Text style={styles.tabText}>No</Text>
                  </TouchableOpacity>                
                  <TouchableOpacity
                    style={[styles.tab, biopsia === true && styles.selectedTab]} // Apply selectedTab style conditionally
                    onPress={() => setBiopsia(true)}
                  >
                    <Text style={styles.tabText}>Si</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        )}
        {biopsia && !isYes && (
            <View style={styles.divSearch2}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Resultado de la Biopsia:</Text>
                <View style={[styles.picker, {flexDirection: 'row'}]}>
                  <TouchableOpacity
                    style={[styles.tab, selectedOption === 'Negativo' && styles.selectedTab]} // Apply selectedTab style conditionally
                    onPress={() => handleOptionPress('Negativo')}
                  >
                    <Text style={styles.tabText}>Negativo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.tab, selectedOption === 'Positivo' && styles.selectedTab]} // Apply selectedTab style conditionally
                    onPress={() => handleOptionPress('Positivo')}
                  >
                    <Text style={styles.tabText}>Positivo</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        )}
        {(selectedOption === 'Positivo') && biopsia && !isYes && (
        <View style={styles.divSearch2}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Riesgo:</Text>
            <View style={[styles.picker, {flexDirection: 'row',}]}>
                <TouchableOpacity
                    style={[styles.tab, selectedRiesgo === 'Bajo' && styles.selectedTab]} // Apply selectedTab style conditionally
                    onPress={() => handleRiesgoPress('Bajo')}
                  >
                    <Text style={styles.tabText}>Bajo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.tab, selectedRiesgo === 'Medio/Alto' && styles.selectedTab]} // Apply selectedTab style conditionally
                    onPress={() => handleRiesgoPress('Medio/Alto')}
                  >
                    <Text style={styles.tabText}>Medio/Alto</Text>
                  </TouchableOpacity>
                </View>
          </View>
        </View>
        )}
      
        <TouchableOpacity
          style={[styles.button, {width: '50%', height: '15%', marginTop: '5%'}]}
          onPress={handleSearch}>
          <Text style={[styles.buttonText, {marginTop: '4%'}]}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const SearchresultScreen = ({ route, navigation }) => {
  const {protatect, biopsia, resultado, riesgo } = route.params

  console.log(biopsia && resultado === 'Positivo' && riesgo === 'Bajo')
return (
  <View style={[styles.containerListado, {flex: 1, justifyContent: 'flex-start'}]}>
    <Text style={[styles.title, {marginTop: '20%'}]}>COINCIDENCIAS ENCONTRADAS:</Text>
      { !protatect && !biopsia && (
      <TouchableOpacity
          style={styles.buttonListado}
          onPress={() => navigation.navigate('4kscore')}>
          <View style={styles.buttonListadoContent}>
          <Image
              source={require('./assets/4kscore.png')}
              style={[styles.image, { resizeMode: 'contain' }]} // Add resizeMode prop
          />
          <Text style={styles.buttonListadoText}>Calicreínas</Text>
          </View>
      </TouchableOpacity>
      )}
      { !protatect && !biopsia && (
      <TouchableOpacity
          style={styles.buttonListado}
          onPress={() => navigation.navigate('selectmdx')}>
          <View style={styles.buttonListadoContent}>
          <Image
              source={require('./assets/selectmdx.png')}
              style={[styles.image, { resizeMode: 'contain' }]}
          />
          <Text style={styles.buttonListadoText}>Panel genético basado en ARNm</Text>
          </View>
      </TouchableOpacity>
      )}
      { biopsia && resultado === 'Negativo' && (
      <TouchableOpacity
          style={styles.buttonListado}
          onPress={() => navigation.navigate('confirmmdx')}>
          <View style={styles.buttonListadoContent}>
          <Image
              source={require('./assets/confirmmdx.png')}
              style={[styles.image, { resizeMode: 'contain' }]}
          />
          <Text style={styles.buttonListadoText}>Estudios Epigenéticos</Text>
          </View>
      </TouchableOpacity>
      )}
      { biopsia && resultado === 'Positivo' && riesgo === 'Bajo' && (
      <TouchableOpacity
          style={styles.buttonListado}
          onPress={() => navigation.navigate('oncotype')}>
          <View style={styles.buttonListadoContent}>
          <Image
              source={require('./assets/oncotype.png')}
              style={[styles.image, { resizeMode: 'contain' }]}
          />
          <Text style={styles.buttonListadoText}>Genomic Prostate Score (GPS)</Text>
          </View>
      </TouchableOpacity>
      )}
      { biopsia && resultado === 'Positivo' && riesgo === 'Bajo' && (
          <TouchableOpacity
              style={styles.buttonListado}
              onPress={() => navigation.navigate('decipher')}>
              <View style={styles.buttonListadoContent}>
              <Image
                  source={require('./assets/decipher.png')}
                  style={[styles.image, { resizeMode: 'contain' }]}
              />
              <Text style={styles.buttonListadoText}>Genomic Classifier (GC)</Text>
              </View>
          </TouchableOpacity>
      )}
      { protatect && (
          <TouchableOpacity
              style={styles.buttonListado}
              onPress={() => navigation.navigate('decipher')}>
              <View style={styles.buttonListadoContent}>
              <Image
                  source={require('./assets/decipher.png')}
                  style={[styles.image, { resizeMode: 'contain' }]}
              />
              <Text style={styles.buttonListadoText}>Genomic Classifier (GC)</Text>
              </View>
          </TouchableOpacity>
      )}
  </View>
  );
}


//Models
const DynamicSphereModel = () => {
  const texture = useLoader(TextureLoader, pngTexture);
  const sphereRef = useRef();
  const [rotation, setRotation] = useState(0);
  const rotationSpeed = 0.1;
  const fullRotation = Math.PI * 2;

  useFrame(() => {
      // Rotate the sphere
      sphereRef.current.rotation.y += rotationSpeed;
      sphereRef.current.position.x += 0.0158;

      // Update rotation state
      setRotation(rotation + rotationSpeed);

      // Check if the sphere has completed a full rotation
      if (rotation >= fullRotation) {
          // Stop rotating
          sphereRef.current.rotation.y = fullRotation;
          sphereRef.current.position.x = 0;
      }
  });

  return (
      <mesh ref={sphereRef} position={[-1 , 0, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial map={texture} />
      </mesh>
  );
};

const SphereModel = () => {
  const texture = useLoader(TextureLoader, pngTexture);
  const [isDragging, setIsDragging] = useState(false);
  const [previousCoords, setPreviousCoords] = useState({ x: 0, y: 0 });
  const sphereRef = useRef();

  const handlePointerDown = (event) => {
      setIsDragging(true);
      setPreviousCoords({ x: event.locationX, y: event.locationY });
  };

  const handlePointerMove = (event) => {

      //console.log('y',event.locationY)
      //console.log('x', event.locationX)
      if (!isDragging) return;
      
      if (previousCoords.x < event.locationX) {
        sphereRef.current.rotation.y += 0.04;
      }
      if (previousCoords.x > event.locationX) {
        sphereRef.current.rotation.y -= 0.04;
      }
      if (previousCoords.y < event.locationY) {
        sphereRef.current.rotation.x += 0.04;
      }
      if (previousCoords.y > event.locationY) {
        sphereRef.current.rotation.x -= 0.04;
      }
  
      setPreviousCoords({ x: event.locationX, y: event.locationY });
  };
  
  return (
      <mesh
          ref={sphereRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
      >
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial map={texture} />
      </mesh>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0081a1',
  },
  containerTabs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
    marginTop: '5%',
  },
  containerListado: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0081a1"
  },
  button: {
    backgroundColor: "teal",
    padding: 10,
    borderRadius: 5,
    marginTop: '4%',
    width: '100%',
    height: '25%',
    alignSelf: 'center',
  },
  buttonInit: {
    backgroundColor: "teal",
    padding: 10,
    borderRadius: 5,
    marginTop: '8%',
    width: '100%',
    height: '30%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    backgroundColor: "#5ba4b7",
    flexDirection: 'column',
    justifyContent: 'center',
    height: '38%',
    borderRadius: 15,
    margin: '10%',
    padding: '8%',
    marginBottom: '25%'
  },
  title: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: '3%',
  },
  subTitle: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 15,
    fontWeight: "bold",
    marginTop: '3%',
    marginHorizontal: '1%',
  },
  content: {
    color: '#fff',
    textAlign: 'right',
    padding: 2,
  },
  div2: {
    backgroundColor: "#0081a1",
    alignItems: 'flex-end',
    width: '100%',
    marginRight: '5%',
  },
  div3: {
    backgroundColor: "#0081a1",
    alignItems: 'flex-end',
    width: '100%',
    marginRight: '5%',
    marginBottom: '5%',
  },
  buttonListado: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 3, // Add shadow on Android
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonListadoContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 60,
    marginRight: 10,
  },
  imageForTest: {
    width: '80%',
    height: '15%',
    alignSelf: 'center',
  },
  buttonListadoText: {
    fontSize: 16,
    color: 'black',
    flex: 1, // Take up remaining space
    textAlign: 'auto',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
  },
  tab: {
      paddingHorizontal: 20,
      paddingVertical: 10,
  },
  selectedTab: {
      backgroundColor: 'lightblue',
  },
  tabText: {
      fontSize: 13,
      fontWeight: 'bold',
      color: '#0081a1',
      textAlign: 'auto',
  },
  tabContent: {
    backgroundColor: '#cfcfcffd',
    margin: 10,
    padding: 20,
    width: '90%',
    borderRadius: 10,
    maxHeight: '60%',
  },
  scrollContainer: {
    backgroundColor: '#d8d7d7fd',
    justifyContent: 'flex-start',
    borderRadius: 10,
  },
  tabContentText: {
      fontSize: 17,
      padding: 10,
      color: '#5c5c5cfd',
  },
  dataContainer: {
    backgroundColor: "#5ba4b7",
    fontSize: 16,
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    width: '90%',
    height: '55%',
    alignSelf: 'center',
  },
  divSearch: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#cfcfcffd',
  },
  divSearch2: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#cfcfcffd',
    width: '80%',
    alignSelf: 'center',
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    marginVertical: 5,
    flexDirection: 'column',
  },
  label: {
    alignSelf: 'center',
    color: '#006781',
    fontSize: 16,
    fontWeight: 'bold',
  },
  picker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectedButton: {
    color: '#4CAF50', // Positive green
  },
  unselectedButton: {
    color: '#F44336', // Negative red
  },
  pdfContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  inputText: {
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginTop: 4,
    marginBottom: 8,
  },
});
