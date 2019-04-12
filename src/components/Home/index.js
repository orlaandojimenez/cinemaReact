import React, {Component} from 'react';
import { Jumbotron, Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';

class Home extends Component {
  render() {
    console.log('hola')
    return (
      <div>
        <Jumbotron>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Row>
                        <Card body>
                            <CardImg top width="100%" src="https://img.peru21.pe/files/article_content_ec_fotos/uploads/2019/04/10/5cae64c5a60c1.png" alt="Card image cap" />
                            <CardTitle>Special Title Treatment</CardTitle>
                            <div>
                                <Button>Details</Button> {' '}
                                <Button>Cinemas</Button>
                            </div>
                            
                        </Card>
                    </Row>
                </div>
                <div className="col-md-4"></div>
            </div>
            
            
        </Jumbotron>
      </div>
    )
  }
}

export default Home;
