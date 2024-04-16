import { StatusBar } from 'expo-status-bar';
import { Animated, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, ScrollView, Linking, PanResponder, Image, Modal } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Canvas, useFrame, useLoader } from '@react-three/fiber/native';
import { TextureLoader } from 'three';
import pngTexture from './assets/logo_texture.png';
import { printToFileAsync, selectPrinterAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import DatePicker from 'react-native-modern-datepicker'



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            title: 'Uro-BioM', 
            headerBackTitleVisible: false, 
            headerShown: true ,
            headerTintColor: '#FFFFFF', // Text color of header elements
            headerStyle: {
              backgroundColor: '#0081a1', // Background color of the header
            },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ 
            title: 'Inicio', 
            headerBackTitleVisible: false, 
            headerShown: true ,
            headerTintColor: '#FFFFFF', // Text color of header elements
            headerStyle: {
              backgroundColor: '#0081a1', // Background color of the header
            },
          }}
        />
        <Stack.Screen
          name="listado"
          component={ListadoScreen}
          options={{ 
            title: '', 
            headerBackTitleVisible: false, 
            headerShown: true ,
            headerTintColor: '#FFFFFF', // Text color of header elements
            headerStyle: {
              backgroundColor: '#0081a1', // Background color of the header
            },
          }}/// Set the title of the header
        />
        <Stack.Screen
          name="buscador"
          component={SearchScreen}
          options={{ 
            title: '', 
            headerBackTitleVisible: false, 
            headerShown: true ,
            headerTintColor: '#FFFFFF', // Text color of header elements
            headerStyle: {
              backgroundColor: '#0081a1', // Background color of the header
            },
          }}// Set the title of the header
        />
        <Stack.Screen
          name="SearchResult"
          component={SearchresultScreen}
          options={{ 
            title: '', 
            headerBackTitleVisible: false, 
            headerShown: true ,
            headerTintColor: '#FFFFFF', // Text color of header elements
            headerStyle: {
              backgroundColor: '#0081a1', // Background color of the header
            },
          }}// Set the title of the header
        />
        <Stack.Screen
          name="formulario"
          component={FormularioScreen}
          options={{ title: 'Generar Formulario' }} // Set the title of the header
        />
        <Stack.Screen
          name="tests"
          component={TestScreen}
          options={{ 
            title: '', 
            headerBackTitleVisible: false, 
            headerShown: true ,
            headerTintColor: '#0081a1'
          }}// Set the title of the header
        />
        <Stack.Screen
          name="algor"
          component={AlgoScreen}
          options={{ 
            title: '', 
            headerBackTitleVisible: false, 
            headerShown: true ,
            headerTintColor: '#FFFFFF', // Text color of header elements
            headerStyle: {
              backgroundColor: '#0081a1', // Background color of the header
            },
          }}// Set the title of the header
        />
        <Stack.Screen
          name="tratamiento"
          component={TratamientoScreen}
          options={{ 
            title: '', 
            headerBackTitleVisible: false, 
            headerShown: true ,
            headerTintColor: '#FFFFFF', // Text color of header elements
            headerStyle: {
              backgroundColor: '#0081a1', // Background color of the header
            },
          }}// Set the title of the header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


//Principal Screens
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Canvas camera={{ position: [-2, 2.5, 5], fov: 20 }}>
        <SphereModel />
      </Canvas>
      <Text style={[styles.title, {marginBottom: '5%',}]}>BIOMARCADORES MOLECULARES EN CÁNCER DE PRÓSTATA</Text>
      <TouchableOpacity
        style={[styles.buttonIniciar, { marginTop: '1%' }]}
        onPress={() => navigation.navigate('Profile')}>
        <Text style={[styles.buttonText, { marginTop: '7%' }]}>Iniciar</Text>
      </TouchableOpacity>
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
  const [translateY] = useState(new Animated.Value(1000));// Initial offset from bottom (adjust as needed)

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: -60, // Animate to the center (adjust offset for precise centering)
      duration: 600, // Animation duration (adjust as desired)
      useNativeDriver: true, // Optimize performance (optional)
    }).start();
  }, []);

  return (
  <View style={styles.container}>
    <Canvas camera={{ position: [-2, 2.5, 5], fov: 30 }}>
      <DynamicSphereModel />
    </Canvas>
    <View style={styles.buttonsContainer}>
      <Animated.View  style={{ transform: [{ translateY }] }}>
        <TouchableOpacity
          style={[styles.buttonInit, { marginTop: '8%' }]}
          onPress={() => navigation.navigate('listado')}>
          <Text style={[styles.buttonText, { marginTop: '8%' }]}>Biomarcadores disponibles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonInit]}
          onPress={() => navigation.navigate('algor')}>
          <Text style={[styles.buttonText, { marginTop: '8%' }]}>Que prueba recomendar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonInit, { marginBottom: '8%' }]}
          onPress={() => navigation.navigate('formulario')}>
          <Text style={[styles.buttonText, { marginTop: '8%' }]}>Generar formulario</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  </View>
  );
};

const AlgoScreen = ({navigation}) => {
  const [translateY1] = useState(new Animated.Value(-1000)); // Initial offset from top for first button (adjust as needed)
  const [translateY2] = useState(new Animated.Value(1000)); // Initial offset from bottom for second button (adjust as needed)

  useEffect(() => {
    Animated.parallel([ // Use parallel animation for simultaneous movement
      Animated.timing(translateY1, {
        toValue: 100, // Animate to the center (adjust offset for precise centering)
        duration: 600, // Animation duration (adjust as desired)
        useNativeDriver: true, // Optimize performance (optional)
      }),
      Animated.timing(translateY2, {
        toValue: 100, // Animate to the center (adjust offset for precise centering)
        duration: 600, // Animation duration (adjust as desired)
        useNativeDriver: true, // Optimize performance (optional)
      }),
    ]).start();
  }, []);


  return (
  <View style={styles.container}>
    <View style={[styles.buttonsContainer , {marginTop: '1%', justifyContent: 'space-around'}]}>
    <Text style={[styles.title, { marginBottom: '1%', marginTop: '20%' }]}>Usos en la práctica clpinica:</Text>
      <Animated.View  style={{ transform: [{ translateY: translateY1 }] }}>
        <TouchableOpacity
          style={[styles.buttonInit, { height: '50%'}]}
          onPress={() => navigation.navigate('buscador')}>
          <Text style={[styles.buttonText, { marginTop: '4%' }]}>Diagnostico</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View  style={{ transform: [{ translateY: translateY2 }] }}>
        <TouchableOpacity
          style={[styles.buttonInit, { height: '50%' }]}
          onPress={() => navigation.navigate('tratamiento')}>
          <Text style={[styles.buttonText, { marginTop: '4%' }]}>Pronóstico/Terapéutico</Text>
        </TouchableOpacity>
      </Animated.View >
    </View>
  </View>
  );
};


const TratamientoScreen = ({navigation}) => {
  const [translateY1] = useState(new Animated.Value(-1000)); // Initial offset from top for first button (adjust as needed)
  const [translateY2] = useState(new Animated.Value(1000)); // Initial offset from bottom for second button (adjust as needed)

  useEffect(() => {
    Animated.parallel([ // Use parallel animation for simultaneous movement
      Animated.timing(translateY1, {
        toValue: 100, // Animate to the center (adjust offset for precise centering)
        duration: 600, // Animation duration (adjust as desired)
        useNativeDriver: true, // Optimize performance (optional)
      }),
      Animated.timing(translateY2, {
        toValue: 140, // Animate to the center (adjust offset for precise centering)
        duration: 600, // Animation duration (adjust as desired)
        useNativeDriver: true, // Optimize performance (optional)
      }),
    ]).start();
  }, []);

  return (
  <View style={styles.container}>
    <View style={[styles.buttonsContainer , {marginTop: '1%', justifyContent: 'space-around'}]}>
    <Text style={[styles.title, { marginBottom: '1%', marginTop: '20%' }]}>Tratamiento</Text>
    <Text style={[styles.title, { marginBottom: '1%', marginTop: '20%' }]}>Seleccione la situación clínica:</Text>
      <Animated.View  style={{ transform: [{ translateY: translateY1 }] }}>
        <TouchableOpacity
        style={[styles.buttonInit, { height: 'auto', marginTop: '2%' }]}
        onPress={() => navigation.navigate('SearchResult', { protatect: true, biopsia: false})}>
        <Text style={[styles.buttonText, { padding: '5%' }]}>Dispuesto a tratarlo con terapia ayduante posterior a la prostatectomia</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View  style={{ transform: [{ translateY: translateY2 }] }}>
        <TouchableOpacity
        style={[styles.buttonInit, { height: 'auto', marginBottom: '8%' }]}
        onPress={() => navigation.navigate('SearchResult', { protatect: false, biopsia: true, resultado: "Positivo"})}>
        <Text style={[styles.buttonText, { padding: '5%' }]}>Dispuesto a la prostatectomia</Text>
        </TouchableOpacity>
      </Animated.View >
    </View>
  </View>
  );
};

const ListadoScreen = ({ navigation }) => {
  const [translateY] = useState(new Animated.Value(1000));// Initial offset from bottom (adjust as needed)

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0, // Animate to the center (adjust offset for precise centering)
      duration: 600, // Animation duration (adjust as desired)
      useNativeDriver: true, // Optimize performance (optional)
    }).start();
  }, []);

  return (
    <View style={styles.containerListado}>
      <Text style={styles.title}>Listado de biomarcadores</Text>
      <Animated.View  style={{ transform: [{ translateY }] }}>
        <TouchableOpacity
          style={[styles.buttonListado]}
          onPress={() => navigation.navigate('tests', {
            testName: "4KScore"
          })}>
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
          onPress={() => navigation.navigate('tests', {
            testName: "SelectMDX"
          })}>
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
          onPress={() => navigation.navigate('tests', {
            testName: "ConfirmMDX"
          })}>
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
          onPress={() => navigation.navigate('tests', {
            testName: "Oncotype"
          })}>
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
          onPress={() => navigation.navigate('tests', {
            testName: "Decipher"
          })}>
          <View style={styles.buttonListadoContent}>
            <Image
              source={require('./assets/decipher.png')}
              style={[styles.image, { resizeMode: 'contain' }]}
            />
            <Text style={styles.buttonListadoText}>Genomic Classifier (GC)</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const FormularioScreen = () => {
  let [nombre, setNombre] = useState("")
  let [cedula, setCedula] = useState("")
  let [medico, setMedico] = useState("")
  let [biopsia, setBiopsia] = useState("")
  let [num_biop, setNumBiop] = useState("")
  let [resultados, setResultados] = useState("")
  let [result_tact, setResTacto] = useState("")
  let [val_psa, setValPsa] = useState("")
  let [volumen, setVolumen] = useState("")
  let [unidad, setUnidad] = useState("")
  let [raza, setRaza] = useState("")
  
  let [fecha, setFecha] = useState(null)
  const [open, setOpen] = useState(false)
  const [hora, setHora] = useState(null)
  const [openHora, setOpenHora] = useState(false)
  let [born, setBorn] = useState(null)
  const [openBorn, setOpenBorn] = useState(false)
  let [fech_psa, setFechPsa] = useState(null)
  const [openPsa, setOpenPsa] = useState(false)  
  let [fech_tact, setFechaTacto] = useState(null)
  const [openTact, setOpenTact] = useState(false) 


  const html = `
    <html>
      <body>
        <img src='./assets/selectmdx.png' />
        <h3 style="text-align: center; margin-bottom: 2%;">Dia y hora de la extracción de la muestra: ${fecha}</h3>
        <h2 style="margin-bottom: 1.5%;">Informacion del Paciente:</h2>
        <p style="color: #313131; padding: 10; margin-left: 15;">Nombre del paciente: ${nombre}</p>
        <p style="color: #313131; padding: 10; margin-left: 15;">Fecha de Nacimiento: ${born}</p>
        <p style="color: #313131; padding: 10; margin-left: 15;">C.I.: ${cedula}</p>
        <p style="color: #313131; padding: 10; margin-left: 15;">Médico Urólogo: ${medico}</p>

        <h2 style="margin-bottom: 1.5%; margin-top: 2%;">Informacion del Clínica:</h2>
        <p style="color: #313131; padding: 10; margin-left: 15:;">Ha habido biopsias previas: ${biopsia}  Cuantas? ${num_biop}</p>
        <p style=" padding: 10;">Resultados:</p>
        <p style="color: #313131; padding: 10; margin-left: 15;">${resultados}</p>
        <p style="color: #313131; padding: 10; margin-left: 15;">Fecha del último tacto rectal: ${fech_tact}</p>
        <p style="color: #313131; padding: 10; margin-left: 15;">Resultado: ${result_tact}</p>
        <p style="color: #313131; padding: 10; margin-left: 15;">Fecha del último PSA: ${fech_psa} Valor del último PSA: ${val_psa}</p>
        <p style="color: #313131; padding: 10; margin-left: 15;">Volumen de la próstata: ${volumen} ${unidad}</p>
        <p style="color: #313131; padding: 10; margin-left: 15;">Raza: ${raza}</p>
        <p style="color: #313131; padding: 10; margin-left: 15;">Firma del medico de la extracción: ________________________</p>
        <p style="text-align: center; position: fixed; bottom: 0; width: 100%;">Av. Italia 2364 of. 304, Tel: 598 2487 89 95 / Email: infouy@southgenetics.com</p>
      </body>
    </html>
  `;

  const handleChange = (fecha) => {
    setFecha(fecha)
  }
  const handleChangeHora = (hora) => {
    setHora(hora)
    setOpenHora(false)
  }

  const GeneratePDF = async () =>{
    const file = await printToFileAsync({
      html: html,
      base64: false,
    });

    await shareAsync(file.uri);
  };

  return(
    <View>
      <ScrollView contentContainerStyle={styles.scrollContainerFromul}>
      <View styles={styles.pdfContainer}>
        <Text style={styles.formText}>Dia y hora de extracción de muestra :</Text>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.buttonInput}
            onPress={() => setOpen(true)}
          >
            {fecha && (
              <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start',}]}>{fecha}</Text>
            )}
            {!fecha && (
              <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start',}]}>Fecha</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonInput, {marginLeft:'10%'}]}
            onPress={() => setOpenHora(true)}
          >
            {hora && (
              <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start',}]}>{hora}</Text>
            )}
            {!hora && (
              <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start',}]}>Hora</Text>
            )}
          </TouchableOpacity>
        </View>
          <View style={styles.rowContainer}>
            <View style={styles.centeredView}>
              <Modal
                animationType='slide'
                transparent={true}
                visible={open}
                style={{marginTop: '20%'}}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <DatePicker
                      mode='calendar'
                      selected={fecha}
                      onDateChange={handleChange}
                    />
                    <TouchableOpacity
                      style={[styles.buttonClose, {marginBottom:'5%'}]}
                      onPress={() => setOpen(false)}
                    >
                      <Text style={styles.buttonText}>Listo</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
              <Modal
                animationType='slide'
                transparent={true}
                visible={openHora}
                style={{marginTop: '20%'}}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <DatePicker
                      mode='time'
                      selected={hora}
                      onTimeChange={handleChangeHora}
                      />
                  </View>
                </View>
              </Modal>
            </View>
          </View>
          <View style={styles.horizontalLine}/>
        
        <Text style={styles.formText}>Nombre del paciente:</Text>
        <TextInput style={styles.inputText} value={nombre} placeholder='nombre del paciente' onChangeText={(value) => setNombre(value)} />
        <View style={styles.horizontalLine}/>
        
        <Text style={styles.formText}> Fecha de nacimiento:</Text>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[styles.buttonInput, {width:'90%'}]}
            onPress={() => setOpenBorn(true)}
          >
            {born && (
              <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start',}]}>{born}</Text>
            )}
            {!born && (
              <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start',}]}>Fecha de nacimiento</Text>
            )}
          </TouchableOpacity>
        </View>
          <View style={styles.rowContainer}>
            <View style={styles.centeredView}>
              <Modal
                animationType='slide'
                transparent={true}
                visible={openBorn}
                style={{marginTop: '20%'}}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <DatePicker
                      mode='calendar'
                      selected={born}
                      onDateChange={(born) => setBorn(born)}
                    />
                    <TouchableOpacity
                      style={[styles.buttonClose, {marginBottom:'5%'}]}
                      onPress={() => setOpenBorn(false)}
                    >
                      <Text style={styles.buttonText}>Listo</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        <View style={styles.horizontalLine}/>

        <Text style={styles.formText}>Documento de identidad:</Text>
        <TextInput style={styles.inputText} value={cedula} placeholder='C.I sin puntos ni guion' keyboardType="numeric" onChangeText={(value) => setCedula(value)} />
        <View style={styles.horizontalLine}/>
        
        <Text style={styles.formText}>Médico Urólogo:</Text>
        <TextInput style={styles.inputText} value={medico} placeholder='medico urólogo' onChangeText={(value) => setMedico(value)} />
        <View style={styles.horizontalLine}/>

        <Text style={styles.formText}>Biopsias previas:</Text>
        <View style={[styles.picker, {flexDirection: 'row',}]}>
          <TouchableOpacity
            style={[styles.tabButton, {width: '50%', marginTop: 15}, biopsia === 'Si' && styles.selectedTab]}
            onPress={() => setBiopsia('Si')}
          >
            <Text style={styles.tabText}>Si</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, {width: '50%', marginTop: 15}, biopsia === 'No' && styles.selectedTab]}
            onPress={() => setBiopsia('No')}
          >
            <Text style={styles.tabText}>No</Text>
          </TouchableOpacity>
        </View>
        { biopsia==='Si' &&(
        <TextInput style={styles.inputText} value={num_biop} placeholder='cantidad de biopsias' keyboardType="numeric" onChangeText={(value) => setNumBiop(value)} />
        )}
        <View style={styles.horizontalLine}/>

        <Text style={styles.formText}>Resultado biopsia:</Text>        
        <View>
            <View style={[styles.picker, {flexDirection: 'row',}]}>
              <TouchableOpacity
                style={[styles.tabButton, {width: '40%', marginTop: 15}, resultados === 'Benigna' && styles.selectedTab]}
                onPress={() => setResultados('Benigna')}
              >
                <Text style={[styles.tabText, {fontSize: 15}]}>Benigna</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tabButton, {width: '40%', marginTop: 15}, resultados === 'HGPIN' && styles.selectedTab]}
                onPress={() => setResultados('HGPIN')}
              >
                <Text style={[styles.tabText, {fontSize: 14}]}>HGPIN</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.picker, {flexDirection: 'row',}]}>
              <TouchableOpacity
                style={[styles.tabButton, {width: '30%', marginHorizontal: 1, marginBottom: 15}, resultados === 'ASAP' && styles.selectedTab]}
                onPress={() => setResultados('ASAP')}
              >
                <Text style={[styles.tabText, {fontSize: 14}]}>ASAP</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tabButton, {width: '30%', marginBottom: 15, marginHorizontal: 1}, resultados === 'PIA' && styles.selectedTab]}
                onPress={() => setResultados('PIA')}
              >
                <Text style={[styles.tabText, {fontSize: 14}]}>PIA</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tabButton, {width: '30%', marginBottom: 15, marginHorizontal: 1}, resultados === 'Otro' && styles.selectedTab]}
                onPress={() => setResultados('Otro')}
              >
                <Text style={[styles.tabText, {fontSize: 14}]}>Otro</Text>
              </TouchableOpacity>
          </View>
        </View>
        <View style={styles.horizontalLine}/>

        <Text style={styles.formText}>Tacto rectal:</Text>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[styles.buttonInput, {width:'90%'}]}
            onPress={() => setOpenTact(true)}
          >
            {fech_tact && (
              <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start',}]}>{fech_tact}</Text>
            )}
            {!fech_tact && (
              <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start',}]}>Fecha tacto rectal:</Text>
            )}
          </TouchableOpacity>
        </View>
          <View style={styles.rowContainer}>
            <View style={styles.centeredView}>
              <Modal
                animationType='slide'
                transparent={true}
                visible={openTact}
                style={{marginTop: '20%'}}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <DatePicker
                      mode='calendar'
                      selected={fech_tact}
                      onDateChange={(fech_tact) => setFechaTacto(fech_tact)}
                    />
                    <TouchableOpacity
                      style={[styles.buttonClose, {marginBottom:'5%'}]}
                      onPress={() => setOpenTact(false)}
                    >
                      <Text style={styles.buttonText}>Listo</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          </View>

        <View style={[styles.picker, {flexDirection: 'row',}]}>
          <TouchableOpacity
            style={[styles.tabButton, {width: '50%', marginBottom: 15}, result_tact === 'Sospechoso' && styles.selectedTab]}
            onPress={() => setResTacto('Sospechoso')}
          >
            <Text style={styles.tabText}>Sospechoso para Ca Próstata</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, {width: '50%', marginBottom: 15}, result_tact === 'No sospechoso' && styles.selectedTab]}
            onPress={() => setResTacto('No sospechoso')}
          >
            <Text style={styles.tabText}>No sospechoso para Ca Próstata</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine}/>

        <Text style={styles.formText}>PSA:</Text>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[styles.buttonInput, {width:'90%'}]}
            onPress={() => setOpenPsa(true)}
          >
            {fech_psa && (
              <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start',}]}>{fech_psa}</Text>
            )}
            {!fech_psa && (
              <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start',}]}>Fecha del PSA</Text>
            )}
          </TouchableOpacity>
        </View>
          <View style={styles.rowContainer}>
            <View style={styles.centeredView}>
              <Modal
                animationType='slide'
                transparent={true}
                visible={openPsa}
                style={{marginTop: '20%'}}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <DatePicker
                      mode='calendar'
                      selected={fech_psa}
                      onDateChange={(fech_psa) => setFechPsa(fech_psa)}
                    />
                    <TouchableOpacity
                      style={[styles.buttonClose, {marginBottom:'5%'}]}
                      onPress={() => setOpenPsa(false)}
                    >
                      <Text style={styles.buttonText}>Listo</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        <TextInput style={styles.inputText} value={val_psa} placeholder='Valor del PSA' keyboardType="numeric" onChangeText={(value) => setValPsa(value)} />
        <View style={styles.horizontalLine}/>

        <Text style={styles.formText}>Volumen de la próstata:</Text>
        <TextInput style={styles.inputText} value={volumen} placeholder='volumen' keyboardType="numeric" onChangeText={(value) => setVolumen(value)} />
        
        <Text style={styles.formText}>Unidad:</Text>
        <View style={[styles.picker, {flexDirection: 'row',}]}>
          <TouchableOpacity
            style={[styles.tabButton, {width: '50%', marginVertical: 15}, unidad === 'cc' && styles.selectedTab]}
            onPress={() => setUnidad('cc')}
          >
            <Text style={styles.tabText}>cc</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, {width: '50%', marginVertical: 15}, unidad === 'grs' && styles.selectedTab]}
            onPress={() => setUnidad('grs')}
          >
            <Text style={styles.tabText}>grs</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine}/>

        <Text style={styles.formText}>Etnia:</Text>
        <View>
          <View style={[styles.picker, {flexDirection: 'row',}]}>
            <TouchableOpacity
              style={[styles.tabButton, {width: '40%', marginTop: 15, marginBottom: 5}, raza === 'Caucásico' && styles.selectedTab]}
              onPress={() => setRaza('Caucásico')}
            >
              <Text style={[styles.tabText, {fontSize: 12}]}>Caucásico</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, {width: '40%', marginTop: 15, marginBottom: 5}, raza === 'Nativo Americano' && styles.selectedTab]}
              onPress={() => setRaza('Nativo Americano')}
            >
              <Text style={[styles.tabText, {fontSize: 12}]}>Nativo Americano</Text>
            </TouchableOpacity>

          </View>
          <View style={[styles.picker, {flexDirection: 'row',}]}>
            <TouchableOpacity
              style={[styles.tabButton, {width: '40%', marginBottom: 15, marginTop: 5,}, raza === 'Afrodescendiente' && styles.selectedTab]}
              onPress={() => setRaza('Afrodescendiente')}
            >
              <Text style={[styles.tabText, {fontSize: 12}]}>Afrodescendiente</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, {width: '40%', marginBottom: 15, marginTop: 5,}, raza === 'Asiático' && styles.selectedTab]}
              onPress={() => setRaza('Asiático')}
            >
              <Text style={[styles.tabText, {fontSize: 12}]}>Asiático</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Button title='Generar PDF' onPress={GeneratePDF} />
      </ScrollView>
    </View>
  );
}


//Test Screens

const TestScreen = ({navigation, route}) =>{
  const { testName } = route.params
  var data = require(`./assets/testsData.json`);
  const [selectedTab, setSelectedTab] = useState(1); // State to track the selected tab
  const [test, setTest] = useState("");

  useEffect(() => {
    // Find the test object by testName
    const foundTest = data.find(data => data.testName === testName);
    
    // Set the test object if found
    if (foundTest) {
      setTest(foundTest);
    }
  }, [testName]);

  
  let imageSource;
  if (test && test.testName === '4KScore') {
    let AKScoreImage = require('./assets/4kscore.png')
    imageSource = AKScoreImage;
  } else if (test && test.testName === 'SelectMDX') {
    let SelectMDXImage = require('./assets/selectmdx.png')
    imageSource = SelectMDXImage;
  } else if (test && test.testName === 'ConfirmMDX') {
    let ConrmMDXImage = require('./assets/confirmmdx.png')
    imageSource = ConrmMDXImage;
  } else if (test && test.testName === 'Oncotype') {
    let OncotypeImage = require('./assets/oncotype.png')
    imageSource = OncotypeImage;
  } else if (test && test.testName === 'Decipher') {
    let DecipherImage = require('./assets/decipher.png')
    imageSource = DecipherImage;
  }

  const handleTabPress = (tabNumber) => {
    setSelectedTab(tabNumber); // Update the selected tab state
  };

  let tabContent;
  switch (selectedTab) {
    case 1:
      tabContent = (
      <>
          {test && (
              <Text style={[styles.tabContentText]}>
                  {test.informacion}
                  <Text
                      style={{ color: 'blue', textDecorationLine: 'underline' }}
                      onPress={() => Linking.openURL('mailto:infouy@southgenetics.com')}
                  >
                      infouy@southgenetics.com
                  </Text>
                  {"\n"}
              </Text>
          )}
      </>
      );
      break;
    case 2:
      tabContent = (
        <>
          {test && (
          <Text style={styles.tabContentText}>
              {test.conducta}
          </Text>
          )}
        </>
      );
      break;
    case 3:
      tabContent = (
      <>
        {test && (
        <Text style={styles.tabContentText}>
          {test.logistica}
        </Text>
        )}
      </>
      );
      break;
    default:
      tabContent = (
      <Text style={styles.tabContentText}>No Content</Text>
      );
  }

  return (
    <ScrollView>
      <View style={styles.containerTabs}>
        <Image
            source={imageSource}
            style={[styles.imageForTest, { resizeMode: 'contain' }]} // Add resizeMode prop
        />
        { (test.testName === '4KScore' || test.testName === 'SelectMDX') && (
        <Text style={[styles.title, { color: '#0081a1' }]}>Marcadores diagnósticos previos a la primera biopsia prostática</Text>
        )}
        { (test.testName === 'ConfirmMDX') && (
        <Text style={[styles.title, { color: '#0081a1' }]}>Marcadores diagnósticos posteriores a la primera biopsia prostática</Text>
        )}
        { (test.testName === 'Oncotype') && (
        <Text style={[styles.title, { color: '#0081a1', marginHorizontal: 5, }]}>Previo al tratamiento en cáncer de próstata localizado, de bajo riesgo</Text>
        )}
        { (test.testName === 'Decipher') && (
        <Text style={[styles.title, { color: '#0081a1', marginHorizontal: 5, }]}>Previo al tratamiento en cáncer de próstata localizado, mediano o alto riesgo</Text>
        )}
        
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
        { test.testName === '4KScore' && (
          <View style={[styles.tabContent, {backgroundColor: "#e077779d"}]}>{tabContent}</View>
        )}
        {test.testName === 'SelectMDX' && (
          <View style={[styles.tabContent, {backgroundColor: "#f3ab588c"}]}>{tabContent}</View>
        )}    
        { test.testName === 'ConfirmMDX' && (
          <View style={[styles.tabContent, {backgroundColor: "#f3ab588c"}]}>{tabContent}</View>
        )}
        { test.testName === 'Oncotype' && (
          <View style={[styles.tabContent, {backgroundColor: "#f39e588c"}]}>{tabContent}</View>
        )}
        { test.testName === 'Decipher' && (
          <View style={[styles.tabContent, {backgroundColor: "#7d87db8c"}]}>{tabContent}</View>
        )}
      </View>
    </ScrollView>
  );
}


//Search Screens
const SearchScreen = ({navigation}) => {
  const [isYes, setIsYes] = useState(false);
  const [biopsia, setBiopsia] = useState(null);
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
        {!isYes && (
            <View style={styles.divSearch2}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Ha habido biopsias previas?:</Text>
                <View style={[styles.pickerSearch, {flexDirection: 'row',}]}>
                  <TouchableOpacity
                    style={[styles.tabButton, {marginRight: 15, borderRadius: 55,}, biopsia === false && styles.selectedTab]} // Apply selectedTab style conditionally
                    onPress={() => setBiopsia(false)}
                  >
                    <Text style={styles.tabText}>No</Text>
                  </TouchableOpacity>                
                  <TouchableOpacity
                    style={[styles.tabButton, {marginRight: 15, borderRadius: 55,}, biopsia === true && styles.selectedTab]} // Apply selectedTab style conditionally
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
                <View style={[styles.pickerSearch, {flexDirection: 'row'}]}>
                  <TouchableOpacity
                    style={[styles.tabButton, {marginRight: 15, borderRadius: 55,}, selectedOption === 'Negativo' && styles.selectedTab]} // Apply selectedTab style conditionally
                    onPress={() => handleOptionPress('Negativo')}
                  >
                    <Text style={styles.tabText}>Negativo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.tabButton, {marginRight: 15, borderRadius: 55,}, selectedOption === 'Positivo' && styles.selectedTab]} // Apply selectedTab style conditionally
                    onPress={() => handleOptionPress('Positivo')}
                  >
                    <Text style={styles.tabText}>Positivo</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        )}
        {biopsia===false && (
          <View style={styles.divSearch2}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>En este caso el paciente debería presentar un PSA alto:</Text>
              <View style={[styles.pickerSearch, {flexDirection: 'row'}]}>

              </View>
            </View>
          </View>
        )}
        <TouchableOpacity
          style={[styles.button, {width: '50%', height: '15%'}]}
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
          onPress={() => navigation.navigate('tests', {
            testName: '4KScore'
          })}>
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
          onPress={() => navigation.navigate('tests', {
            testName: "SelectMDX"
          })}>
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
          onPress={() => navigation.navigate('tests', {
            testName: "ConfirmMDX"
          })}>
          <View style={styles.buttonListadoContent}>
          <Image
              source={require('./assets/confirmmdx.png')}
              style={[styles.image, { resizeMode: 'contain' }]}
          />
          <Text style={styles.buttonListadoText}>Estudios Epigenéticos</Text>
          </View>
      </TouchableOpacity>
      )}
      { biopsia && resultado === 'Positivo' && (
      <TouchableOpacity
          style={styles.buttonListado}
          onPress={() => navigation.navigate('tests', {
            testName: "Oncotype"
          })}>
          <View style={styles.buttonListadoContent}>
          <Image
              source={require('./assets/oncotype.png')}
              style={[styles.image, { resizeMode: 'contain' }]}
          />
          <Text style={styles.buttonListadoText}>Genomic Prostate Score (GPS)</Text>
          </View>
      </TouchableOpacity>
      )}
      { biopsia && resultado === 'Positivo' && (
          <TouchableOpacity
              style={styles.buttonListado}
              onPress={() => navigation.navigate('tests', {
                testName: "Decipher"
              })}>
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
              onPress={() => navigation.navigate('tests', {
                testName: "Decipher"
              })}>
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


//Styles sheet
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
    marginBottom: '5%'
  },
  containerListado: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0081a1"
  },
  button: {
    backgroundColor: "#ff42",
    padding: 10,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: '#136100',
    marginTop: '10%',
    width: '100%',
    height: '25%',
    alignSelf: 'center',
  },
  buttonInit: {
    backgroundColor: "#ff42",
    padding: 10,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: '#136100',
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
    flexDirection: 'column',
    height: '38%',
    borderRadius: 55,
    margin: '10%',
    padding: '8%',
    matginTop: '30%',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 20,
    fontWeight: "bold",
    marginTop:'10%',
    marginBottom: '13%',
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
    marginRight: '15%',
    padding: 5,
    paddingEnd: 20,
  },
  div3: {
    backgroundColor: "#0081a1",
    alignItems: 'flex-end',
    width: '100%',
    paddingEnd: 20,
    marginBottom: '5%',
    padding: 5,
  },
  buttonListado: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 55,
    backgroundColor: 'white',
    elevation: 3, // Add shadow on Android
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ translateY: 0 }], // Start the buttons off-screen    
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
    maxWidth:300,
    height: '15%',
    alignSelf: 'center',
  },
  buttonIniciar: {
    backgroundColor: '#ff42',
    width: '50%',
    height: '7%',
    alignSelf: 'center',
    borderRadius: 55,
    borderWidth: 2,
    borderColor: '#136100',
    marginBottom: 25,
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
      borderRadius: 25,
      borderColor: "grey",
  },
  tabButton: {
    maxWidth: '40%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#b6b5b5",
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
    borderRadius: 40,
    marginBottom: '50%'
  },
  scrollContainer: {
    backgroundColor: '#d8d7d7fd',
    justifyContent: 'flex-start',
    borderRadius: 10,
  },
  scrollContainerFromul: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 15,
  },
  tabContentText: {
      fontSize: 17,
      padding: 10,
      color: '#5c5c5cfd',
  },
  dataContainer: {
    backgroundColor: "#0081a1",
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
    borderRadius: 55,
    backgroundColor: 'white',
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
    borderRadius: 55,
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
    borderRadius: 5,
    borderColor: 'grey',
  },
  pickerSearch: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 55,
    borderColor: 'grey',
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
    marginTop: 15,
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    marginBottom: 0,
    marginVertical:10,
    padding: 10,
    borderRadius: 55,
    minWidth: '25%',
    minHeight: '5%',
    backgroundColor: '#2196F3',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonInput: {
    marginBottom: 0,
    marginTop:15,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    minWidth: '40%',
  },
  formText: {
    fontWeight: 'bold',
    color: '#010a5c'
  },
  horizontalLine:{
    borderBottomColor: '#454645',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
  }

});
