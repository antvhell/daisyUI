import React from "react";
import Slide from "../components/slide";

const Home = () => {
  return (
    <div>
      <Slide />
      <h2 className="mt-10 font-semibold text-xl">A manera de prólogo</h2>
      <p className="text-justify font-light mt-4">
        La Fonética es la disciplina que estudia los sonidos del lenguaje. Está
        en estrecha relación y diálogo con la Fonología, encargada del
        funcionamiento y del estudio de los sistemas fónicos. Se interesa por
        conocer la forma en la que se producen los sonidos; proporciona las
        herramientas para conocer la orquestación de las distintas regiones del
        aparato fonador encargadas de producir el sonido; le corresponde el
        estudio de la estructura acústica de los sonidos, permite extraer del
        habla las pistas pertinentes de las oposiciones fonológicas;
        adicionalmente, es la encargada de investigar la percepción del habla.
      </p>

      <p className="font-light mt-4">
        La presente Guía parte de la idea de que los sonidos de las lenguas
        forman palabras, por ello, los materiales sonoros utilizados no son
        secuencias de sonidos sin significado, sino palabras existentes en las
        lenguas. Este sustento intenta proporcionar herramientas más realistas
        para formar estudiosos del lenguaje, que sean capaces de emprender el
        estudio de cualquier lengua. Comprende el estudio articulatorio y
        acústico del sonido. Los materiales se agrupan en cuatro secciones:
      </p>

      <p className="font-light mt-4">
        - AFI contiene los símbolos de los diferentes sonidos del Alfabeto
        Fonético Internacional, el sonido se puede escuchar pulsando el símbolo
        en cuestión.
      </p>
      <p className="font-light mt-4">
        - Fonética articulatoria. Esta sección corresponde a la descripción
        articulatoria de Consonantes y Vocales; se acompaña de animaciones y de
        ejercicios, destinados a reconocer las características articulatorias de
        los sonidos, el símbolo correspondiente y a ejercitarse en la
        transcripción.
      </p>
      <p className="font-light mt-4">
        - Acústica. En esta sección se muestran las estructuras acústicas de las
        distintas clases de sonidos. El recorrido que hago en ella no es
        exhaustivo, confío en la curiosidad de quien accede a esta Guía para
        investigar y enriquecer el conocimiento de las pistas acústicas de los
        sonidos.
      </p>
      <p className="font-light mt-4">
        - Obras consultadas. En esta sección, además del listado bibliográfico,
        se incluye la liga de Praat, que sin duda será de utilidad, no solo para
        familiarizarse con los programas de análisis acústico, sino para que el
        usuario pueda hacer análisis propios con esta herramienta.
      </p>
      <p className="font-light mt-4">
        Esta Guía no habría sido posible sin la participación de varias
        personas. En primer lugar, el ingeniero Antonio Vargas quien se encargó
        de diseñar los materiales y de elaborar la programación, agradezco a
        Armando Doroteo, becario del Sistema Nacional de Investigadores, por la
        participación que tuvo en la preparación de los contenidos y de los
        ejercicios, a los estudiantes de la Escuela Nacional de Antropología e
        Historia que amablemente aceptaron poner a prueba la Guía y evaluar su
        utilidad. Señalo también la generosidad de mis colegas quienes me
        facilitaron materiales de lenguas específicas y aceptaron proporcionarme
        datos de sus lenguas maternas, por último, mi más profundo
        agradecimiento a todos los hablantes de las lenguas, tanto indomexicanas
        como de otras latitudes, que me han facilitado los datos de sus lenguas.
      </p>
    </div>
  );
};

export default Home;
