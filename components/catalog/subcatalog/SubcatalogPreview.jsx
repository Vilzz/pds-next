import Link from 'next/link'
import Image from 'next/image'
import { CardDeck, Col, Container, Row } from 'react-bootstrap'
import PreviewCard from './PreviewCard.jsx'
const SubcatalogPreview = ({ preview }) => {
  return (
    <Container>
      <Row className='justify-content-center mb-3'>
        <h3 className='display-4'>{preview.name}</h3>
      </Row>
      <Row className='mb-4'>
        <Col xs={12}>
          <CardDeck>
            {preview.groups.map((item) => (
              <PreviewCard
                product={item}
                subslug={preview.subslug}
                subcatalogname={preview.name}
                key={item._id}
              />
            ))}
          </CardDeck>
        </Col>
      </Row>
    </Container>
  )
}

export default SubcatalogPreview
