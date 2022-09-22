import dynamic from "next/dynamic";
import ReactPDF from "@react-pdf/renderer";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const PDFViewer = dynamic<React.ComponentProps<typeof ReactPDF.PDFViewer>>(
  () => import("@react-pdf/renderer").then((component) => component.PDFViewer),
  {
    ssr: false,
  }
);

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#d11fb6",
    color: "white",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: "100vw", //the pdf viewer will take up all of the width and height
    height: "100vh",
    border: "none",
  },
});

// Create Document Component
function BasicDocument() {
  return (
    <>
      <style>{`
        body {
          overflow: hidden;
        }
      `}</style>
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Hello</Text>
            </View>
            <View style={styles.section}>
              <Text>World</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
}

const TestPage = () => {
  return <BasicDocument />;
};

export default TestPage;
