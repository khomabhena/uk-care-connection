import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import { Button, Container, HozWrap, MainContent, MainPage, Navigation, PageContent, PageName, PageNumber, Sidebar, SmallPage } from './PdfViewerElements'
// import file from '../../images/cv2.pdf'
import { useNavigate, useParams } from 'react-router-dom'

const PdfViewer = () => {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)
    const [pageName, setPageName] = useState(null)
    const {file, fileName} = useParams()

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
        setPageName(fileName)
    }

    const goToPrevPage = () => {
        setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1)
    }

    const goToNextPage = () => {
        setPageNumber(
            pageNumber + 1 >= numPages ? numPages : pageNumber + 1
        )
    }

    const navigate = useNavigate()
    const closePage = () => {
        navigate(-1)
    }

  return (
    <Container>
        <Navigation>
            <HozWrap>
                {/* <Button>
                    <span class="pdf-icons material-symbols-outlined">menu</span>
                </Button> */}
                <PageName>{pageName || 'sample.pdf'}</PageName>
            </HozWrap>
            <HozWrap>
                <Button onClick={goToPrevPage}>
                    <span class="pdf-icons material-symbols-outlined">arrow_back_ios_new</span>
                </Button>
                <PageNumber>{pageNumber}/{numPages}</PageNumber>
                <Button onClick={goToNextPage}>
                    <span class="pdf-icons material-symbols-outlined">arrow_forward_ios</span>
                </Button>
            </HozWrap>
            <Button onClick={closePage}>
                <span class="pdf-icons material-symbols-outlined">close</span>
            </Button>
        </Navigation>
        <MainContent>
            {/* <Sidebar>
                <SmallPage>1</SmallPage>
                <SmallPage>2</SmallPage>
            </Sidebar> */}
            <PageContent>
                <MainPage>
                    <Document
                        file={file}
                        onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                    </Document>
                </MainPage>
            </PageContent>
        </MainContent>
    </Container>
  )
}

export default PdfViewer