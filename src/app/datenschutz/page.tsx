import type { Metadata } from "next";
import DraftNotice from "@/components/DraftNotice";
import PageHead from "@/components/PageHead";
import { site } from "@/data/site";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.",
  robots: { index: false },
};

const nutzungsdaten = [
  "IP-Adresse",
  "Datum und Uhrzeit der Anfrage",
  "Dauer Ihres Webseitenbesuchs",
  "Zeitzonendifferenz zur Greenwich Mean Time (GMT)",
  "Inhalt der Anforderung (konkrete Seite)",
  "Zugriffsstatus/HTTP-Statuscode",
  "jeweils übertragene Datenmenge",
  "Website, von der die Anforderung kommt",
  "Browser, Sprache des Browsers, Version der Browsersoftware",
  "Betriebssystem",
];

/** Postanschrift der verantwortlichen Stelle — steht zweimal im Text. */
function Verantwortliche() {
  const koeln = site.locations[0];
  return (
    <p className={styles.text}>
      {site.name}
      <br />
      Datenschutzbeauftragter: {site.privacy.officer}
      <br />
      {koeln.street}
      <br />
      {koeln.zip}, Germany
      <br />
      E-Mail:{" "}
      <a href={`mailto:${site.privacy.email}`} className={styles.mail}>
        {site.privacy.email}
      </a>
    </p>
  );
}

export default function DatenschutzPage() {
  return (
    <>
      <PageHead
        label="Rechtliches"
        title="Datenschutz"
        size="md"
        paddingBottom={0}
      >
        <p className={styles.meta}>
          {site.name}. Stand {site.privacy.updated}.
        </p>
      </PageHead>

      <section className={`${styles.body} shell`}>
        <div className={styles.inner}>
          <DraftNotice />

          <h2 className={styles.h2}>Datenschutzerklärung</h2>
          <p className={styles.text}>
            Die folgenden Hinweise zum Datenschutz gelten im Rahmen Ihres
            Besuches unserer Webseite{" "}
            <a
              href="http://www.cnc-tv.de/"
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              http://www.cnc-tv.de/
            </a>
            . Die {site.name} wird im Folgenden „CNC“ genannt.
          </p>
          <p className={styles.text}>
            Uns ist bewusst, dass Ihnen der sorgfältige Umgang mit Ihren
            persönlichen Daten wichtig ist; CNC ist der Schutz Ihrer
            persönlichen Daten ebenso wichtig. Aus diesem Grund halten wir uns
            bei der Erhebung, Verarbeitung und Nutzung strikt an die
            gesetzlichen Bestimmungen. Um den Schutz Ihrer persönlichen Daten zu
            gewährleisten, nutzen wir technische und organisatorische Maßnahmen,
            um die von Ihnen erhaltenen Daten zuverlässig zu schützen. Hierzu
            zählen Schulungen unserer Mitarbeiter und deren Verpflichtung auf
            das Datengeheimnis sowie verfahrenstechnische und elektronische
            Sicherheitsmaßnahmen im Zusammenhang mit der Verarbeitung Ihrer
            Daten.
          </p>
          <p className={styles.text}>
            Im Folgenden informieren wir Sie über Art, Zweck und Umfang der
            Datenverarbeitungen, die bei einem Besuch unserer Webseite erfolgen.
          </p>
          <p className={styles.text}>
            Wir sind stets bemüht, Ihnen im Zusammenhang mit der Nutzung unseres
            Internetangebots in datenschutzrechtlichen Fragen weiterzuhelfen.
            Wenden Sie sich zu diesem Zweck bitte an unsere verantwortliche
            Stelle für die Datenverarbeitung:
          </p>
          <Verantwortliche />

          <h2 className={styles.h2}>1. Personenbezogene Daten</h2>
          <p className={styles.text}>
            Die nachfolgenden Informationen beziehen sich auf die Verarbeitung
            Ihrer personenbezogenen Daten. Personenbezogene Daten sind alle
            Daten, die auf Sie persönlich beziehbar sind, also z.B. Name,
            Adresse, E-Mail-Adresse, oder auch Ihr Nutzerverhalten.
          </p>

          <h2 className={styles.h2}>
            2. Datenerhebung bei jedem Aufruf der Webseite
          </h2>

          <h3 className={styles.h3}>a) Nutzungsdaten</h3>
          <p className={styles.text}>
            Bei jedem Aufruf, auch bei der nur informatorischen Nutzung unserer
            Webseite, also immer wenn Sie unsere Webseite besuchen, auch ohne
            sich zur Nutzung der Webseite anzumelden oder uns sonst
            Informationen bewusst zu übermitteln (etwa im Rahmen einer
            Newsletteranmeldung), erheben wir folgende Daten, die Ihr Browser
            übermittelt, um Ihnen den Besuch der Website zu ermöglichen
            (Nutzungsdaten):
          </p>
          <ul className={styles.list}>
            {nutzungsdaten.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p className={styles.text}>
            Ihre IP-Adresse speichern wir aus IT-Sicherheitsgründen für 7 Tage
            ab Ihrem Webseitenbesuch in unseren IT System Log-Files, um
            (Distributed) Denial of Service-Angriffe zu erkennen und zu
            verhindern. Nach Ablauf von 7 Tagen wird Ihre IP-Adresse
            anonymisiert, indem die letzten 8 Bit Ihrer IP-Adresse entfernt
            werden.
          </p>
          <p className={styles.text}>
            Solange Ihre IP-Adresse in ungekürzter Form gespeichert ist, wird
            diese nicht mit den übrigen genannten Nutzungsdaten zusammengeführt.
          </p>

          <h3 className={styles.h3}>b) Cookies</h3>
          <p className={styles.text}>
            Bei der Nutzung unserer Webseite werden Cookies auf dem von Ihnen
            zum Seitenaufruf verwendeten Gerät gespeichert. Sie ermöglichen den
            Systemen von CNC, Ihren Browser zu erkennen und Ihnen für Sie
            persönlich interessante, verschiedene Services anzubieten.
          </p>
          <p className={styles.text}>
            Cookies sind kleine Textdateien (alphanumerische
            Identifizierungszeichen), die bei Besuch einer Webseite auf dem
            Endgerät der Nutzer gespeichert werden.
          </p>
          <p className={styles.text}>
            Cookies werden nach einer vorgegebenen Dauer automatisiert gelöscht.
            Sie ermöglichen es uns, Sie bei wiederholtem Webseitenbesuch anhand
            der Rückmeldung des gesetzten Cookies an die beteiligten Server über
            verschiedene Browser-Sitzungen hinweg wiederzuerkennen, um bspw. von
            Ihnen gewählte Spracheinstellungen über verschiedene
            Webseitenbesuche beizubehalten.
          </p>
          <p className={styles.text}>
            Sie haben die Möglichkeit, den von Ihnen genutzten Browser über die
            Browsereinstellungen so zu konfigurieren, dass einzelne Arten von
            Cookies nicht bzw. von vornherein keine Cookies zugelassen werden.
            Unsere Webseite kann auch von Ihnen besucht werden, wenn Ihre
            Browsereinstellungen das Setzen von Cookies blockieren oder Sie dem
            Setzen von Cookies nicht zustimmen. Wir möchten Sie jedoch an dieser
            Stelle darauf hinweisen, dass eine uneingeschränkte Nutzung unserer
            Webseite, insbesondere der Einkauf mittels Nutzung des virtuellen
            Warenkorbs, in diesem Fall aus technischen Gründen nicht möglich ist
            (s.o.).
          </p>

          <h3 className={styles.h3}>c) Drittanbieter</h3>

          <h4 className={styles.h4}>(aa) Google-Analytics</h4>
          <p className={styles.text}>
            Wir setzen im Rahmen unseres Internetauftrittes Google-Analytics
            ein. Hierbei handelt es sich um ein Webanalyse-Tool der Google Inc.
            Google Analytics verwendet „Cookies“, um eine Analyse der Benutzung
            der Webseite durch Sie zu ermöglichen. Die durch den Cookie (s.o.)
            erzeugten Informationen über Ihre Benutzung dieser Webseite,
            einschließlich Ihrer gekürzten IP-Adresse, wird an einen Server von
            Google ggf. auch in den USA übertragen und dort gespeichert. Die
            Auswertung durch Google geschieht ausschließlich auf anonymisierter
            Basis, indem durch Nutzung der von Google bereitgestellten
            Code-Erweiterung „anonymizeIp“ die letzten 8 Bit Ihrer IP-Adressen
            gelöscht werden und somit für die folgende Datenverarbeitung
            anonymisiert sind.
          </p>
          <p className={styles.text}>
            Die von Google akkumulierten Daten sind für Google somit
            anonymisiert, da der Dienst keine Möglichkeit hat, die Verknüpfung
            zu Ihrem User-Account und damit zu Ihren personenbezogenen Daten
            herzustellen.
          </p>
          <p className={styles.text}>
            Google wird die erhobenen Informationen benutzen, um Ihre Nutzung
            der Website auszuwerten, um Reports über die Websiteaktivitäten für
            uns als Webseitenbetreiber zusammenzustellen und um weitere mit der
            Webseitennutzung und der Internetnutzung verbundene Dienstleistungen
            zu erbringen. Auch wird Google diese Informationen gegebenenfalls an
            Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit
            Dritte diese Daten im Auftrag von Google verarbeiten.
          </p>
          <p className={styles.text}>
            Sofern Sie die Nutzung von Google Analytics in Ihrem Webbrowser
            dennoch unterbinden möchten, können Sie das Browser-Add-on zum
            Deaktivieren von Google Analytics installieren. Diesen finden Sie
            unter:{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              https://tools.google.com/dlpage/gaoptout
            </a>
          </p>

          <h4 className={styles.h4}>(bb) Google Maps</h4>
          <p className={styles.text}>
            Diese Webseite verwendet Google Maps API, um geographische
            Informationen visuell darzustellen. Bei der Nutzung von Google Maps
            werden von Google auch Daten über die Nutzung der Kartenfunktionen
            durch Besucher erhoben, verarbeitet und genutzt. Nähere
            Informationen über die Datenverarbeitung durch Google können Sie den
            Google-Datenschutzhinweisen entnehmen. Dort können Sie im
            Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen
            verändern.
          </p>
          <p className={styles.text}>
            Ausführliche Anleitungen zur Verwaltung der eigenen Daten im
            Zusammenhang mit Google-Produkten finden Sie in der
            Google-Datenschutzerklärung.
          </p>
          <p className={styles.text}>
            Wie bereits erwähnt können Sie die Installation von Cookies auch
            durch eine entsprechende Einstellung Ihrer Browser-Software
            verhindern: Wir weisen Sie jedoch nochmals darauf hin, dass Sie in
            diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website
            vollumfänglich nutzen können.
          </p>
          <p className={styles.text}>
            Weitere Informationen zur Datennutzung durch Google:{" "}
            <a
              href="https://www.google.de/policies/privacy/partners/"
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              www.google.de/policies/privacy/partners/
            </a>
          </p>

          <h3 className={styles.h3}>d) Retargeting</h3>
          <p className={styles.text}>
            Retargeting ist eine Variante des Online-Targeting, bei der Nutzer
            eines Online-Angebots durch die Retargeting-Funktion von Anbietern
            markiert werden. Diese Funktion dient dazu, Besuchern einer Webseite
            im Rahmen des Werbenetzwerks interessenbezogene Werbeanzeigen zu
            präsentieren. Um dies zu ermöglichen, speichert Ihr Browser sog.
            Cookies (s.o.) die es ermöglichen, Sie als Besucher
            wiederzuerkennen, wenn Sie Webseiten aufrufen, die dem Werbenetzwerk
            des entsprechenden Anbieters angehören. Auf diesen Seiten wird Ihnen
            also basierend auf vorangegangener Internetaktivität Werbung für
            Produkte angezeigt, für welche Sie bereits Interesse auf anderen
            Webseiten, die die Remarketing-Funktion des entsprechenden Anbieters
            verwenden, bekundet haben.
          </p>
          <p className={styles.text}>
            Wir nutzen auf unserer Webseite die Retargeting-Angebote folgender
            Anbieter:
          </p>

          <h4 className={styles.h4}>(aa) Google Remarketing</h4>
          <p className={styles.text}>
            Nach eigenen Angaben erhebt Google bei diesem Vorgang keine
            personenbezogenen Daten. Sollten Sie den Einsatz der Funktion
            Remarketing von Google dennoch nicht wünschen, können Sie diese
            grundsätzlich deaktivieren, indem Sie die entsprechenden
            Einstellungen unter{" "}
            <a
              href="https://adssettings.google.com/"
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              https://adssettings.google.com/
            </a>{" "}
            vornehmen.
          </p>

          <h4 className={styles.h4}>(bb) Facebook</h4>
          <p className={styles.text}>
            Sollten Sie den Einsatz der Retargeting-Funktion von Facebook nicht
            wünschen, können Sie diese grundsätzlich in Ihrem Facebook-Konto
            unter{" "}
            <a
              href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen"
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              https://www.facebook.com/ads/preferences/
            </a>{" "}
            deaktivieren.
          </p>
          <p className={styles.text}>
            Alternativ können Sie den Einsatz von Cookies für interessenbezogene
            Werbung allgemein über die Netzwerkwerbeinitiative deaktivieren,
            indem Sie den Anweisungen unter{" "}
            <a
              href="http://optout.networkadvertising.org/#!/"
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              http://optout.networkadvertising.org/#!/
            </a>{" "}
            folgen.
          </p>

          <h3 className={styles.h3}>e) Links zu Drittanbietern</h3>
          <p className={styles.text}>
            Auf unserer Webseite sind auch Links zu Drittanbietern und unseren
            Internetauftritten bei Facebook, Twitter, Instagram und Youtube
            gesetzt. Sie aktivieren die Weiterleitung durch Klick auf das
            entsprechende Symbol (etwa auf den Facebook-Button) am unteren Ende
            unserer Webseite. Für die im Folgenden durchgeführte
            Datenverarbeitung durch die Drittanbieter ist CNC nicht
            verantwortlich. Bitte informieren Sie sich über die
            Datenverarbeitung anhand der Datenschutzerklärungen der
            verantwortlichen Unternehmen.
          </p>

          <h2 className={styles.h2}>
            3. Zusätzliche Datenverarbeitung bei Newsletteranmeldung
          </h2>
          <p className={styles.text}>
            Sofern Sie regelmäßig über Angebote, Aktionen und Neuigkeiten
            unserer Produkte informiert werden möchten haben Sie die
            Möglichkeit, sich auf unserer Webseite unter Angabe Ihrer
            E-Mail-Adresse für den Bezug unseres Newsletters anzumelden.
          </p>
          <p className={styles.text}>
            Im Rahmen der Newsletter-Anmeldung verwenden wir das sog.
            Double-Opt-In-Verfahren. Das bedeutet, dass Sie nach Angabe Ihrer
            E-Mail-Adresse eine Bestätigungs-E-Mail von uns erhalten, mit
            welcher wir Sie um Bestätigung bitten, dass Sie den Empfang des
            Newsletters wünschen.
          </p>
          <p className={styles.text}>
            Sofern Sie die Bestätigung nicht innerhalb von 24 Stunden vornehmen
            wird Ihre Anmeldung automatisch gelöscht und Sie werden keine
            Newsletter von uns erhalten.
          </p>
          <p className={styles.text}>
            Sofern Sie Ihre Newsletter-Anmeldung bestätigen, speichern wir Ihre
            E-Mail-Adresse so lange, bis Sie den Newsletter abbestellen. Die
            Speicherung dient alleine dem Zweck, Ihnen den Newsletter senden zu
            können.
          </p>
          <p className={styles.text}>
            Pflichtangabe für Anmeldung und Erhalt unseres Newsletters ist
            allein Ihre E-Mail-Adresse als technische Notwendigkeit.
          </p>
          <p className={styles.text}>
            Ihre Einwilligung in den Erhalt des Newsletters können Sie jederzeit
            formlos widerrufen. Den Widerruf können Sie durch eine Nachricht an
            die in dieser Datenschutzerklärung und im Impressum angegebenen
            Kontaktdaten erklären.
          </p>
          <p className={styles.text}>
            Ihre angegebenen Daten werden nicht an Dritte weitergegeben.
          </p>

          <h2 className={styles.h2}>4. Kontaktaufnahme per E-Mail</h2>
          <p className={styles.text}>
            Sofern Sie uns per E-Mail kontaktieren, verwenden wir Ihre
            E-Mail-Adresse und Ihren Namen um Ihr Anliegen bearbeiten zu können
            und uns mit Ihnen in Verbindung zu setzen. Wir löschen ihre Anfrage
            (E-Mail) im Anschluss an die Bearbeitung Ihres Anliegens.
          </p>

          <h2 className={styles.h2}>5. Weitergabe personenbezogener Daten</h2>
          <p className={styles.text}>
            CNC ist in einigen Fällen gesetzlich verpflichtet, Informationen an
            Dritte weiterzugeben. Insbesondere beim Verdacht einer Straftat ist
            CNC auf Anfrage verpflichtet, Daten an Strafverfolgungsbehörden
            weiterzugeben.
          </p>
          <p className={styles.text}>
            Im Übrigen verwenden wir Ihre uns anvertrauten persönlichen Daten
            ausschließlich für die Abwicklung Ihrer Newsletterbestellung.
          </p>
          <p className={styles.text}>
            Zur Abwicklung von Newsletterbestellungen geben wir Ihre
            E-Mail-Adresse an einen entsprechenden Dienstleister weiter. Dieser
            Dienstleister ist im Rahmen eines Auftragsverarbeitungsverhältnisses
            an unsere Weisungen gebunden und gibt Ihre Daten nicht an Dritte
            weiter.
          </p>
          <p className={styles.text}>
            Eine sonstige Weitergabe Ihrer Daten an Dritte erfolgt nicht.
          </p>

          <h2 className={styles.h2}>
            6. Recht auf Auskunft, Löschung und Widerruf
          </h2>

          <h3 className={styles.h3}>a) Auskunftsansprüche</h3>
          <p className={styles.text}>
            Sie haben jederzeit das Recht, von uns unentgeltlich Auskunft zu
            verlangen über die zu Ihnen bei uns gespeicherten Daten, sowie zu
            deren Herkunft, Empfängern oder Kategorien von Empfängern, an die
            diese Daten weitergegeben werden und den Zweck der Speicherung.
          </p>

          <h3 className={styles.h3}>b) Berichtigung</h3>
          <p className={styles.text}>
            Sie haben das Recht, unverzüglich die Berichtigung Sie betreffender
            unrichtiger personenbezogener Daten zu verlangen. Zudem haben Sie
            unter Berücksichtigung der Zwecke der Verarbeitung das Recht die
            Vervollständigung unvollständiger personenbezogener Daten zu
            verlangen.
          </p>

          <h3 className={styles.h3}>c) Löschung</h3>
          <p className={styles.text}>
            Nach Beendigung des jeweiligen Nutzungsverhältnisses werden Ihre
            persönlichen Daten nach Ablauf der steuer- und handelsrechtlichen
            Aufbewahrungsfristen gelöscht.
          </p>
          <p className={styles.text}>
            Sofern die gesetzlichen Aufbewahrungsfristen nicht davon berührt
            werden und Ihre Daten nicht mehr benötigt werden, können Sie unter
            den Voraussetzungen des Art. 17 DSGVO jederzeit die Löschung Ihrer
            Daten verlangen.
          </p>

          <h3 className={styles.h3}>
            d) Recht auf Einschränkung der Verarbeitung
          </h3>
          <p className={styles.text}>
            Sie haben das Recht die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen, wenn eine der Voraussetzungen
            gemäß Art. 18 DSGVO erfüllt ist.
          </p>

          <h3 className={styles.h3}>e) Recht auf Datenübertragbarkeit</h3>
          <p className={styles.text}>
            Sie haben das Recht, die Sie betreffenden personenbezogenen Daten,
            die Sie uns bereitgestellt haben, in einem strukturierten, gängigen
            und maschinenlesbaren Format zu erhalten, sowie diese Daten einem
            anderen Verantwortlichen ohne Behinderung durch CNC zu übermitteln,
            sofern die Voraussetzungen des Art. 20 DSGVO erfüllt sind.
          </p>

          <h3 className={styles.h3}>f) Widerspruchsrecht</h3>
          <p className={styles.text}>
            Sie haben gemäß Art. 21 DSGVO das Recht, aus Gründen, die sich aus
            Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung
            Sie betreffender personenbezogener Daten, die aufgrund von Artikel 6
            Absatz 1 Buchstaben e oder f DSGVO erfolgt, Widerspruch einzulegen.
          </p>

          <h3 className={styles.h3}>g) Widerruf</h3>
          <p className={styles.text}>
            Eine erteilte Einwilligung in die Nutzung Ihrer Daten können Sie
            jederzeit mit Wirkung für die Zukunft formlos widerrufen.
          </p>

          <h3 className={styles.h3}>h) Beschwerderecht</h3>
          <p className={styles.text}>
            Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen
            oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer
            Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres
            Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen
            Verstoßes, wenn Sie der Ansicht sind, dass die durch uns
            vorgenommene Verarbeitung der Sie betreffenden personenbezogenen
            Daten gegen datenschutzrechtliche Vorgaben verstößt.
          </p>

          <h3 className={styles.h3}>i) Kontaktdaten</h3>
          <p className={styles.text}>
            Ihren Widerruf sowie Auskunfts- oder Löschungswünsche richten Sie
            bitte postalisch oder per E-Mail an:
          </p>
          <Verantwortliche />
        </div>
      </section>
    </>
  );
}
