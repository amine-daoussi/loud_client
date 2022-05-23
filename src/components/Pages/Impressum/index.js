import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: { padding: '20px', fontSize: '1.5vh' },
  link: {},
}));

const Impressum = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid container direction="column" wrap alignItems="flex-start" justify="center">
        <h1>Impressum</h1>
        <span>Loud and Clear GmbH</span>
        <span>Uferstrasse 8-11</span>
        <span>Studio A14</span>
        <span style={{ marginBottom: '15px' }}>13357 Berlin</span>
        <span>Telefon:</span>
        <span>+49 1705521220 Adriaan</span>
        <span>+49 173 6465743 Rémi</span>
        <span style={{ marginBottom: '15px' }}>info@lac.berlin</span>
        <span>UST-ID: DE301318736</span>
        <span style={{ marginBottom: '15px' }}>HRB 166695 B</span>
        <span>VR-Bank Handels- und</span>
        <span>Gewerbebank Augsburg</span>
        <span>IBAN: DE09720621520002506637</span>
        <span style={{ marginBottom: '25px' }}>BIC: GEN0DEF1MTG</span>
        <h1>AGB’s (General conditions of use)</h1>
        <span style={{ marginBottom: '15px' }}>
          Allgemeine Miet- und Geschäftsbedingungen der Loud and Clear GmbH (“AGB”)
        </span>
        <span style={{ fontWeight: 'bold' }}>1. Allgemeines</span>
        <p>
          1.1. Die folgenden allgemeinen Miet- und Geschäftsbedingungen sind Bestandteil sowohl aller Mietverträge als
          auch Mietangebote der Loud and Clear GmbH („Vermieter“) und finden in ihrer jeweils gültigen Form ebenso für
          alle künftigen Verträge zwischen Vermieter und seinem Vertragspartner ("Mieter") Anwendung.
        </p>
        <p>
          1.2. Von diesen allgemeinen Mietbedingungen abweichende Vereinbarungen bedürfen der ausdrücklichen
          schriftlichen Bestätigung des Vermieters. Entgegenstehenden Geschäftsbedingungen des Mieters wird ausdrücklich
          widersprochen und diese werden – soweit nicht ausdrücklich schriftlich vereinbart – nicht Vertragsbestandteil.
        </p>
        <p>
          1.3. Die Angebote des Vermieters sind freibleibend, sofern sie nicht ausdrücklich als verbindlich bezeichnet
          sind. Ein Vertrag kommt erst durch eine Unterzeichnung eines verbindlichen, durch den Mieter nicht veränderten
          Angebotes und rechtzeitigem Eintreffen beim Vermieter innerhalb der jeweils vom Vermieter genannten
          Angebotsfrist zustande. Ein Vertrag kommt ebenfalls durch eine schriftliche Auftragsbestätigung oder durch
          Überlassung des Mietgegenstandes durch den Vermieter bzw. Beginn der Serviceleistungen zustande.
        </p>
        <p style={{ marginBottom: '15px' }}>
          1.4. Angebote, Konzeptionen, Materialaufstellungen, technische Skizzen, Pläne und andere erarbeitete Inhalte
          unterliegen dem Urheberrecht. Die Weitergabe an Dritte ist nur mit schriftlichem Einverständnis des Vermieters
          zulässig. 1.5. Der Mieter stimmt der Speicherung relevanter Daten durch den Vermieter zu. Diese Daten werden
          nicht an Dritte weitergegeben und nur für Zwecke der Vertragsabwicklung im Rahmen der geltenden
          Datenschutzgesetze genutzt.
        </p>
        <span style={{ fontWeight: 'bold' }}>2. Mietgegenstand und sonstige Leistungen</span>
        <p>
          2.1. Gegenstand des Vertrages sind die im Vertrag, der Auftragsbestätigung und/oder im Lieferschein
          aufgeführten Einzelgeräte und Anlagen zur Miete oder zum Verkauf/Verbrauch, und/oder Beauftragungen für
          Arbeiten als Techniker und/oder andere Serviceleistungen.
        </p>
        <p style={{ marginBottom: '15px' }}>
          2.2. Der Vermieter behält sich das Recht vor, die dort genannten Geräte durch funktionsgleiche, andere Geräte
          zu ersetzen.
        </p>
        <span style={{ fontWeight: 'bold' }}>3. Mietzeit und Mietgebühr</span>
        <p>
          3.1. Die Mietzeit wird nach Tagen (14 Uhr bis 11 Uhr folgender Tag) berechnet. Angefangene Tage zählen voll.
          Die Mindestmietzeit beträgt einen Tag. Die Mietzeit beginnt mit dem vereinbarten Tag der Bereitstellung bzw.
          dem Zeitpunkt der Auslieferung vom Lager des Vermieters und endet am vereinbarten Zeitpunkt, aber nicht vor
          Rücklieferung ins Lager des Vermieters.
        </p>
        <p style={{ marginBottom: '15px' }}>
          3.2. Die Mietgebühr richtet sich nach der jeweils gültigen Preisliste und ist unabhängig davon zu bezahlen, ob
          die Geräte tatsächlich benutzt wurden. Eine vorzeitige Rückgabe der Geräte bewirkt keine Verringerung der
          Mietgebühr.
        </p>
        <span style={{ fontWeight: 'bold' }}>4. Versand und Gefahrenübergang</span>
        <p>
          4.1. Der Versand/Transport der Geräte - soweit nicht die Abholung ab Lager vereinbart ist - erfolgt auf Kosten
          und Risiko des Mieters auf dem vom Vermieter gewählten Versandweg, es sei denn, der Mieter schreibt eine
          bestimmte Versandart ausdrücklich vor. Die Kosten einer auf Wunsch des Mieters abgeschlossenen
          Transportversicherung gehen zu seinen Lasten.
        </p>
        <p>4.2. Der Gefahrenübergang tritt ab Lager des Vermieters ein.</p>
        <p>
          4.3. Der Mieter bestätigt mit der Übernahme der Geräte deren einwandfreien Zustand, Funktion und
          Vollständigkeit. Jeweils erforderliches und/oder angefordertes Zubehör ist beigepackt. Der Mieter hat
          Gelegenheit dies bis zum Zeitpunkt des Gefahrenübergangs zu überprüfen.
        </p>
        <p style={{ marginBottom: '15px' }}>
          4.4. Ist ein Mangel bei Übergabe nicht zu erkennen oder zeigt sich ein Mangel erst später, so hat der Mieter
          dem Vermieter dies unverzüglich nach Entdeckung anzuzeigen. Andernfalls gilt der Zustand der Mietgegenstände
          als mangelfrei.
        </p>
        <span style={{ fontWeight: 'bold' }}>5. Gebrauch der Mietsache</span>
        <p>
          5.1 Der Mieter verpflichtet sich zur sorgfältigen und zweckmäßigen Behandlung der Mietsache. Alle
          Obliegenheiten, die mit dem Besitz, Gebrauch und dem Erhalt der Mietsache verbunden sind, sind zu beachten.
          Die Wartungs-, Pflege- und Gebrauchsempfehlungen des Vermieters sind zu befolgen. Der Mieter hat bestätigt,
          dass er oder ein von ihm Beauftragter mit dem ordnungsgemäßem Gebrauch der Mietsache vertraut ist.
          Insbesondere sind die einschlägigen Vorschriften für Veranstaltungen zu beachten.
        </p>
        <p>
          5.2. Sofern der Mieter kein Servicepersonal gebucht hat, hat dieser alle notwendigen Pflege- und
          Instandhaltungsmaßnahmen fachgerecht und auf seine Kosten vorzunehmen.
        </p>
        <p>
          5.3. Der Mieter hat für eine störungsfreie Stromversorgung Sorge zu tragen. Für Schäden, die infolge von
          Stromausfall, - unterbrechungen oder -schwankungen eintreten, haftet der Mieter. Auch eine vom Vermieter
          installierte Stromverteilung entbindet den Mieter nicht von dieser Haftung.
        </p>
        <p>
          5.4. Die vermieteten Geräte sind und bleiben Eigentum des Vermieters. Der Mieter ist verpflichtet, die
          Mietgegenstände gegen Verlust und Beschädigung zu sichern. Eine Untervermietung der Geräte ist nicht erlaubt.
          Der Mieter hat die Geräte in seinem unmittelbaren Besitz zu belassen und sie nur an den vereinbarten
          Einsatzorten zu verwenden.
        </p>
        <p>
          5.5. Die am Mietgegenstand angebrachten Seriennummern, Herstellerschilder oder andere Erkennungszeichen dürfen
          nicht entfernt, verdeckt oder in irgendeiner Weise entstellt werden. Der Mieter ermöglicht dem Vermieter die
          jederzeitige Überprüfung der Geräte.
        </p>
        <p style={{ marginBottom: '15px' }}>
          5.6. Der Verkauf sowie die Verpfändung sind untersagt. Von der Pfändung, durch Inanspruchnahme Dritter oder
          bei Verlust ist der Vermieter unverzüglich in Kenntnis zu setzen. Anfallende Interventionskosten trägt der
          Mieter.
        </p>
        <span style={{ fontWeight: 'bold' }}>6. Haftung des Mieters</span>
        <p>
          6.1. Der Mieter haftet für alle Schäden (z.B. Verlust, Diebstahl, verursachte Defekte, Transportschäden,
          Personenschäden, Feuer- und Wasserschäden, fehlerhafte Stromversorgung, Witterung, Verschmutzung u. a.) an der
          Mietsache, die während der Mietzeit an den Mietgeräten und dem Zubehör durch ihn oder Dritte (z.B. Gäste)
          entstehen. Auch den Schaden der zufälligen Beschädigung, sowie Schäden aufgrund höherer Gewalt trägt der
          Mieter.
        </p>
        <p>
          6.2. Im Falle eines Totalschadens hat der Mieter ungeachtet des aktuellen Marktwertes den
          Wiederbeschaffungswert zzgl. Beschaffungskosten zu ersetzen, unabhängig davon, ob er persönlich den
          Schadensfall zu vertreten hat.
        </p>
        <p>
          6.3. Sollte die Mietsache oder ein Teil davon entwendet werden, ist der Mieter verpflichtet, umgehend
          polizeiliche Anzeige zu erstatten und den Vermieter zu benachrichtigen.
        </p>
        <p style={{ marginBottom: '15px' }}>
          6.4. Lautsprecher, Lampen, Tonnadeln, Ton- und Videoköpfe werden bei defekter Rückgabe dem Mieter berechnet.
        </p>
        <span style={{ fontWeight: 'bold' }}>7. Versicherung, Genehmigungen, gesetzliche Bestimmungen</span>
        <p>
          7.1. Der Mieter ist verpflichtet, das allgemein mit den jeweiligen Mietgegenständen verbundene Risiko
          (Verlust, Diebstahl, Beschädigung, Haftpflicht) ordnungsgemäß und ausreichend zu versichern.
        </p>
        <p style={{ marginBottom: '15px' }}>
          7.2. Der Mieter sorgt für die Einhaltung aller gesetzlichen Vorschriften.
        </p>
        <span style={{ fontWeight: 'bold' }}>8. Haftung des Vermieters, Schadensersatz</span>
        <p>
          8.1. Der Vermieter haftet für den funktionstüchtigen Zustand der Geräte nur bis zum Zeitpunkt des
          Gefahrenübergangs.
        </p>
        <p>
          8.2. Eine Haftung des Vermieters für Vermögensschäden, die sich aus dem Mietgebrauch bzw. dem nicht oder nicht
          rechtzeitig gewährleisteten Mietgebrauch ergeben können wird ausgeschlossen; die Haftung für Sachschäden wird
          auf Vorsatz und grobe Fahrlässigkeit beschränkt.
        </p>
        <p>
          8.3. Eine Haftung des Vermieters für Schäden bei Überschreitung zulässiger Lautstärken wird ausgeschlossen.
        </p>
        <p>
          8.4. Eine Haftung für Folgeschäden, die sich aus einer Leistungsstörung ergeben ist ebenso ausgeschlossen wie
          für Nichtfunktionieren der Mietsache bei einer Verwendung mit nicht durch den Vermieter abgestimmten
          technischen Geräten.
        </p>
        <p>
          8.5. Der Mieter ist verpflichtet, bei auftretenden Leistungsstörungen im Rahmen seiner Möglichkeiten
          mitzuwirken und eventuelle Schäden gering zu halten. Etwaige Mängel der Mietgeräte sind dem Vermieter
          unverzüglich anzuzeigen. Dem Vermieter ist dann Gelegenheit zu geben, den Mangel an den Mietgeräten zu beheben
          oder andere, gleichartige Mietgeräte zur Verfügung zu stellen. Unterlässt der Mieter die unverzügliche Anzeige
          eines Mangels, tritt ein Anspruch auf Minderung nicht ein.
        </p>
        <p>
          8.6. Hat der Mieter die Mietsache bearbeitet oder Veränderungen vorgenommen, ist eine Gewährleistung wegen
          Mangels an der Mietsache ausgeschlossen. Wird die Mietsache auf Verlangen des Mieters untersucht und zeigt
          sich hierbei kein Mangel an der Mietsache, so hat der Mieter die dem Vermieter hierdurch entstandenen
          Aufwendungen zu ersetzen.
        </p>
        <p>
          8.7. Der Mieter ist verpflichtet, den Vermieter von sämtlichen Ansprüchen Dritter freizustellen, die aus
          Anlass oder im Zusammenhang mit der Miete von Geräten gegen den Vermieter erhoben werden. Der
          Freistellungsanspruch des Vermieters gegen den Mieter umfasst auch die Kosten, die dem Vermieter für die
          Abwehr von Ansprüchen Dritter entstehen.
        </p>
        <p style={{ marginBottom: '15px' }}>
          8.8. Ein Anspruch des Mieters auf Schadensersatz beschränkt sich im Übrigen auf die Fälle von Vorsatz und
          grober Fahrlässigkeit und in der Höhe auf den Mietpreis. Weitere, darüber hinausgehende Ansprüche des Mieters
          sind ausgeschlossen. Unberührt von dieser Haftungsbeschränkung bleibt die Verschuldenshaftung für
          Personenschäden.
        </p>
        <span style={{ fontWeight: 'bold' }}>9. Serviceleistungen</span>
        <p>
          9.1. Sollte der Vertrag Serviceleistungen wie z.B. Aufbau, Techniker und/oder anderes Personal, Abbau,
          Anlieferung etc. beinhalten, gelten darüber hinaus folgende Vereinbarungen:
        </p>
        <p>
          9.2. Der Mieter hat für eine problemlose Durchfahrts- und Anlieferungsmöglichkeiten für das jeweils notwendige
          Transportmittel zu sorgen. Ebenso sind für die Vertragsdauer die entsprechenden Parkmöglichkeiten zur
          Verfügung zu stellen. Alle anfallenden Kosten, auch wenn sie unverlangt vom Vermieter ausgelegt werden, trägt
          der Mieter.
        </p>
        <p>
          9.3. Der Mieter hat während des kompletten Zeitraumes die Überwachung und Sicherung des Mietmaterials und des
          Personals sicherzustellen. Dies gilt auch für die Aufbau-, Proben-, Veranstaltungs- und Abbauzeiten,
          nutzungsfreie Zeiten und nachts. Das Personal des Vermieters übernimmt diese Überwachung ausdrücklich nicht.
        </p>
        <p>
          9.4. Der Mieter übernimmt die volle Verantwortung über die dem Vermieter zugewiesenen Befestigungspunkte zum
          Errichten hängender Konstruktionen, auch wenn diese dem Mieter durch Dritte zugewiesen wurden. Für eventuelle
          Schäden durch unzureichende Belastbarkeit haftet der Mieter.
        </p>
        <p>
          9.5. Der Mieter stellt einen kompetenten, weisungsbefugten Ansprechpartner während des gesamten
          Projektzeitraumes.
        </p>
        <p style={{ marginBottom: '15px' }}>
          9.6. Installation und Bedienung der Geräte erfolgen nach den örtlichen Begebenheiten, technischen
          Möglichkeiten und nach den Anweisungen der Leitung des Veranstaltungsortes.
        </p>
        <span style={{ fontWeight: 'bold' }}>10. Stornierung und Kündigung</span>
        <p>
          10.1. Der Mieter hat das Recht, nach Maßgabe der nachstehenden Regelungen zu stornieren. Die Stornierung
          bedarf zu ihrer Wirksamkeit der Schriftform.
        </p>
        <p>
          10.2. Im Falle der Stornierung wird ein je nach dem Zeitpunkt der Stornierung gestaffelter, pauschalierter
          Schadensersatz in folgender Höhe vom Mieter geschuldet:
          <ul>
            <li>bis 30 Tage vor Mietbeginn 30% der Gesamtvergütung;</li>
            <li> bis 14 Tage vor Mietbeginn 40% der Gesamtvergütung;</li>
            <li>bis 7 Tage vor Mietbeginn 50% der Gesamtvergütung;</li>
            <li>bis 2 Tage vor Mietbeginn 80% der Gesamtvergütung;</li>
            <li>bis zum Mietbeginn und danach die Gesamtvergütung.</li>
          </ul>
        </p>
        <p>
          10.3. Für den Zeitpunkt der Stornierung ist der Zugang der Erklärung beim Vermieter maßgeblich. Die
          Stornierung bedarf der Schriftform.
        </p>
        <p>
          10.4. Der Vertrag kann vom Vermieter ohne Einhaltung einer Frist gekündigt werden,
          <ul>
            <li>wenn sich die wirtschaftlichen Verhältnisse des Mieters wesentlich verschlechtert haben;</li>
            <li>wenn der Mieter die Mietgegenstände vertragswidrig gebraucht;</li>
            <li>
              wenn der Mieter mit der Zahlung des Mietzinses in Verzug gerät oder wenn höhere Gewalt eintritt, die die
              Leistungserbringung durch den Vermieter unmöglich macht.
            </li>
          </ul>
        </p>
        <p style={{ marginBottom: '15px' }}>
          10.5. Im Falle der fristlosen Kündigung durch den Vermieter ist der Mieter verpflichtet, den Mietgegenstand
          auf Anforderung an den Vermieter sofort herauszugeben. Der Mieter haftet bei Verzug der Herausgabe für alle
          weitergehenden Schäden, insbesondere entgangenen Gewinn des Vermieters.
        </p>
        <span style={{ fontWeight: 'bold' }}>11. Lieferung</span>
        <p>
          11.1. Die Vereinbarung eines Miettermins erfolgt unter dem Vorbehalt rechtzeitiger Liefermöglichkeit. Wird die
          Einhaltung des Miettermins aus Umständen, die der Vermieter nicht zu vertreten hat, unmöglich, kann der Mieter
          vom Vertrag zurücktreten.
        </p>
        <p style={{ marginBottom: '15px' }}>11.2. Teillieferungen und Teilleistungserbringungen sind gestattet.</p>
        <span style={{ fontWeight: 'bold' }}>12. Rückgabe der Mietsache</span>
        <p>
          12.1. Der Mieter hat auf seine Kosten und Gefahr die Mietgeräte nach Ablauf der Mietzeit unverzüglich und ohne
          gesonderte Aufforderung an den Vermieter zurückzugeben.
        </p>
        <p>
          12.2. Die Mietgegenstände sind vollzählig, geordnet und im sauberen Zustand zurückzugeben. Die Rückgabepflicht
          erstreckt sich auch auf defektes Mietzubehör.
        </p>
        <p>
          12.3. Verzögert sich das Eintreffen der Geräte beim Vermieter über die ursprünglich vorgesehene Mietzeit
          hinaus, wird der Mietpreis entsprechend nachberechnet. Für jeden angebrochenen Tag, wird eine volle Tagesmiete
          entsprechend der aktuellen Preisliste berechnet.
        </p>
        <p>
          12.4. Wird die Mietsache nicht in ordnungsgemäßem Zustand zurückgegeben, hat der Mieter unbeschadet weiterer
          Schadensersatzansprüche dem Vermieter den durch Unbrauchbarkeit der defekten Mietsache auftretenden
          Mietausfall zu erstatten.
        </p>
        <p>
          12.5. Verzichtet der Mieter auf die Mitwirkung bei der Bestandsaufnahme der Mietsache bei Rückgabe, erkennt er
          die vom Vermieter erstellte Bestandsaufnahme an.
        </p>
        <p style={{ marginBottom: '15px' }}>
          12.6. Mit der Rücknahme der Mietsache bestätigt der Vermieter nicht, dass diese mängelfrei übergeben worden
          ist. Der Vermieter behält sich eine eingehende Prüfung innerhalb von zwei Werktagen vor.
        </p>
        <span style={{ fontWeight: 'bold' }}>13. Zahlungsbedingungen, Zahlungsverzug</span>
        <p>
          13.1. Grundsätzlich ist die Mietgebühr bei Herausgabe der Mietsache an den Vermieter fällig. Rechnungen sind,
          falls nicht anders vereinbart, innerhalb von 14 Tagen nach Erhalt und ohne Abzug zahlbar.
        </p>
        <p>
          13.2. Bei einer Mietdauer über 14 Tage hinaus ist der Vermieter berechtigt, Zwischenrechnungen zu stellen,
          auch wenn dies nicht ausdrücklich vereinbart wurde.
        </p>
        <p>13.3. Verzug tritt nach dem Zeitpunkt der Fälligkeit ohne weitere Erinnerung ein.</p>
        <p>
          13.4. Bei Zahlungsverzug ist der Vermieter berechtigt, vom Fälligkeitszeitpunkt an gesetzliche Verzugszinsen
          in Höhe von 8 % über dem Basiszinssatz der Europäischen Zentralbank zu berechnen; im Falle eines
          Verbrauchergeschäftes entsprechend 5 %.
        </p>
        <p style={{ marginBottom: '15px' }}>
          13.5. Der Mieter kann gegen die Forderungen des Vermieters nur aufrechnen oder ein Zurückbehaltungsrecht
          ausüben, wenn die Gegenforderung unbestritten oder rechtskräftig festgestellt ist.
        </p>
        <span style={{ fontWeight: 'bold' }}>14. Sonstiges</span>
        <p>
          14.1. Erfüllungsort sind die Betriebsräume des Vermieters in der Uferstrasse 8-11, Studio A14, 13357 Berlin
        </p>
        <p>14.2. Der Gerichtsstand ist Berlin. Es gilt das Recht der Bundesrepublik Deutschland.</p>
        <p style={{ marginBottom: '25px' }}>
          14.3. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, so bleibt die Wirksamkeit der übrigen
          Bestimmungen hiervon unberührt.
        </p>
        <span>Loud and Clear GmbH</span>
        <span>Uferstrasse 8-11</span>
        <span>Studio A14</span>
        <span style={{ marginBottom: '15px' }}>13357 Berlin</span>
        <span>Telefon: +49 1705521220</span>
        <span style={{ marginBottom: '15px' }}>info@lac.berlin</span>
        <span>UST-ID: DE301318736</span>
        <span>HRB 166695 B</span>
      </Grid>
    </Grid>
  );
};

export default Impressum;
