import React, {Component, Fragment} from 'react';
import setting from './setting.png';
import face from './face.png';
import place from './place.png';
import calendar from './calendar.png'
import {Link} from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import axios from 'axios';

injectGlobal`
   html, body{
    background-color: white;
    margin:0;
    padding:0;
    width:100%;
    height:100%;
   }
`



class Main extends Component{
    state={
        title0: '',
        image0:'',
        contest_place0:'',
        contest_date0:'',

        id1: '',
        title1: '',
        contest_start1: '',
        contest_finish1: '',
        contest_place1: '',
        content1: '',
        updated_at1: '',

        id2: '',
        title2: '',
        contest_start2: '',
        contest_finish2: '',
        contest_place2: '',
        content2: '',
        updated_at2: '',

        id3: '',
        title3: '',
        contest_start3: '',
        contest_finish3: '',
        contest_place3: '',
        content3: '',
        updated_at3: '',

        id4: '',
        title4: '',
        contest_start4: '',
        contest_finish4: '',
        contest_place4: '',
        content4: '',
        updated_at4: '',

        id5: '',
        title5: '',
        contest_start5: '',
        contest_finish5: '',
        contest_place5: '',
        content5: '',
        updated_at5: '',

        id6: '',
        title6: '',
        contest_start6: '',
        contest_finish6: '',
        contest_place6: '',
        content6: '',
        updated_at6: '',

        id7: '',
        title7: '',
        contest_start7: '',
        contest_finish7: '',
        contest_place7: '',
        content7: '',
        updated_at7: '',

        id8: '',
        title8: '',
        contest_start8: '',
        contest_finish8: '',
        contest_place8: '',
        content8: '',
        updated_at8: '',

        id9: '',
        title9: '',
        contest_start9: '',
        contest_finish9: '',
        contest_place9: '',
        content9: '',
        updated_at9: '',

        id10: '',
        title10: '',
        contest_start10: '',
        contest_finish10: '',
        contest_place10: '',
        content10: '',
        updated_at10: '',

        id11: '',
        title11: '',
        contest_start11: '',
        contest_finish11: '',
        contest_place11: '',
        content11: '',
        updated_at11: '',

        id12: '',
        title12: '',
        contest_start12: '',
        contest_finish12: '',
        contest_place12: '',
        content12: '',
        updated_at12: '',
    }
    componentDidMount(){
        axios.get(`http://soylatte.kr:3000`)
            .then(res=>{
                    this.setState({
                        title0: res.data[0].title,
                        contest_date0: res.data[0].contest_date,
                        contest_place0: res.data[0].contest_place,
                        image0: res.data[0].image
                    })
                this.setState({
                    title1: res.data[1].title,
                    contest_date1: res.data[1].contest_date,
                    contest_place1: res.data[1].contest_place,
                    image1: res.data[1].image
                })
                this.setState({
                    title2: res.data[2].title,
                    contest_date2: res.data[2].contest_date,
                    contest_place2: res.data[2].contest_place,
                    image2: res.data[2].image
                })
                this.setState({
                    title3: res.data[3].title,
                    contest_date3: res.data[3].contest_date,
                    contest_place3: res.data[3].contest_place,
                    image3: res.data[3].image
                })
                this.setState({
                    title4: res.data[4].title,
                    contest_date4: res.data[4].contest_date,
                    contest_place4: res.data[4].contest_place,
                    image4: res.data[4].image
                })
                this.setState({
                    title5: res.data[5].title,
                    contest_date5: res.data[5].contest_date,
                    contest_place5: res.data[5].contest_place,
                    image5: res.data[5].image
                })
                this.setState({
                    title6: res.data[6].title,
                    contest_date6: res.data[6].contest_date,
                    contest_place6: res.data[6].contest_place,
                    image6: res.data[6].image
                })
                this.setState({
                    title7: res.data[7].title,
                    contest_date7: res.data[7].contest_date,
                    contest_place7: res.data[7].contest_place,
                    image7: res.data[7].image
                })
                this.setState({
                    title8: res.data[8].title,
                    contest_date8: res.data[8].contest_date,
                    contest_place8: res.data[8].contest_place,
                    image8: res.data[8].image
                })
                this.setState({
                    title9: res.data[9].title,
                    contest_date9: res.data[9].contest_date,
                    contest_place9: res.data[9].contest_place,
                    image9: res.data[9].image
                })
                this.setState({
                    title10: res.data[10].title,
                    contest_date10: res.data[10].contest_date,
                    contest_place10: res.data[10].contest_place,
                    image10: res.data[10].image
                })
                this.setState({
                    title11: res.data[11].title,
                    contest_date11: res.data[11].contest_date,
                    contest_place11: res.data[11].contest_place,
                    image11: res.data[11].image
                })
                this.setState({
                    title12: res.data[12].title,
                    contest_date12: res.data[12].contest_date,
                    contest_place12: res.data[12].contest_place,
                    image12: res.data[12].image
                })
                console.log(res)
            })
    }
    render(){

        return(
            <Fragment>
            <Container>
                <Nav>
                    <img src={setting} alt={"setting"}/>
                    <Margin><img src={face} alt={'face'}  /></Margin>
                </Nav>
                <Card0>
                    <Span>{this.state.title0}</Span>
                </Card0>
                <CardBottom>
                    <BottomHalf1>
                        <Mem>
                            <img src={calendar} alt={"calendar"} sizes={'29px'}/>
                            {this.state.contest_date0}
                        </Mem>
                        <Mem>
                            <img src={place} alt={"place"}/>
                            {this.state.contest_place0}
                        </Mem>
                    </BottomHalf1>
                    <BottomHalf2>
                        <Link to={'/hackathon'} style={hackStyle}>Learn more</Link>
                    </BottomHalf2>
                </CardBottom>
            </Container>

                <Container>
                    <Card1>
                        <Span>{this.state.title1}</Span>
                    </Card1>
                    <CardBottom>
                        <BottomHalf1>
                            <Mem>
                                <img src={calendar} alt={"calendar"} sizes={'29px'}/>
                                {this.state.contest_date1}
                            </Mem>
                            <Mem>
                                <img src={place} alt={"place"}/>
                                {this.state.contest_place1}
                            </Mem>
                        </BottomHalf1>
                        <BottomHalf2>
                            <Link to={'/hackathon'} style={hackStyle}>Learn more</Link>
                        </BottomHalf2>
                    </CardBottom>
                </Container>


                <Container>
                    <Card3>
                        <Span>{this.state.title3}</Span>
                    </Card3>
                    <CardBottom>
                        <BottomHalf1>
                            <Mem>
                                <img src={calendar} alt={"calendar"} sizes={'29px'}/>
                                {this.state.contest_date3}
                            </Mem>
                            <Mem>
                                <img src={place} alt={"place"}/>
                                {this.state.contest_place3}
                            </Mem>
                        </BottomHalf1>
                        <BottomHalf2>
                            <Link to={'/hackathon'} style={hackStyle}>Learn more</Link>
                        </BottomHalf2>
                    </CardBottom>
                </Container>

                <Container>
                    <Card4>
                        <Span>{this.state.title4}</Span>
                    </Card4>
                    <CardBottom>
                        <BottomHalf1>
                            <Mem>
                                <img src={calendar} alt={"calendar"} sizes={'29px'}/>
                                {this.state.contest_date4}
                            </Mem>
                            <Mem>
                                <img src={place} alt={"place"}/>
                                {this.state.contest_place4}
                            </Mem>
                        </BottomHalf1>
                        <BottomHalf2>
                            <Link to={'/hackathon'} style={hackStyle}>Learn more</Link>
                        </BottomHalf2>
                    </CardBottom>
                </Container>

                <Container>
                    <Card5>
                        <Span>{this.state.title5}</Span>
                    </Card5>
                    <CardBottom>
                        <BottomHalf1>
                            <Mem>
                                <img src={calendar} alt={"calendar"} sizes={'29px'}/>
                                {this.state.contest_date5}
                            </Mem>
                            <Mem>
                                <img src={place} alt={"place"}/>
                                {this.state.contest_place5}
                            </Mem>
                        </BottomHalf1>
                        <BottomHalf2>
                            <Link to={'/hackathon'} style={hackStyle}>Learn more</Link>
                        </BottomHalf2>
                    </CardBottom>
                </Container>

                <Container>
                    <Card6>
                        <Span>{this.state.title6}</Span>
                    </Card6>
                    <CardBottom>
                        <BottomHalf1>
                            <Mem>
                                <img src={calendar} alt={"calendar"} sizes={'29px'}/>
                                {this.state.contest_date6}
                            </Mem>
                            <Mem>
                                <img src={place} alt={"place"}/>
                                {this.state.contest_place6}
                            </Mem>
                        </BottomHalf1>
                        <BottomHalf2>
                            <Link to={'/hackathon'} style={hackStyle}>Learn more</Link>
                        </BottomHalf2>
                    </CardBottom>
                </Container>

                <Container>
                    <Card7>
                        <Span>{this.state.title7}</Span>
                    </Card7>
                    <CardBottom>
                        <BottomHalf1>
                            <Mem>
                                <img src={calendar} alt={"calendar"} sizes={'29px'}/>
                                {this.state.contest_date7}
                            </Mem>
                            <Mem>
                                <img src={place} alt={"place"}/>
                                {this.state.contest_place7}
                            </Mem>
                        </BottomHalf1>
                        <BottomHalf2>
                            <Link to={'/hackathon'} style={hackStyle}>Learn more</Link>
                        </BottomHalf2>
                    </CardBottom>
                </Container>

                <Container>
                    <Card8>
                        <Span>{this.state.title8}</Span>
                    </Card8>
                    <CardBottom>
                        <BottomHalf1>
                            <Mem>
                                <img src={calendar} alt={"calendar"} sizes={'29px'}/>
                                {this.state.contest_date8}
                            </Mem>
                            <Mem>
                                <img src={place} alt={"place"}/>
                                {this.state.contest_place8}
                            </Mem>
                        </BottomHalf1>
                        <BottomHalf2>
                            <Link to={'/hackathon'} style={hackStyle}>Learn more</Link>
                        </BottomHalf2>
                    </CardBottom>
                </Container>

                <Container>
                    <Card9>
                        <Span>{this.state.title9}</Span>
                    </Card9>
                    <CardBottom>
                        <BottomHalf1>
                            <Mem>
                                <img src={calendar} alt={"calendar"} sizes={'29px'}/>
                                {this.state.contest_date9}
                            </Mem>
                            <Mem>
                                <img src={place} alt={"place"}/>
                                {this.state.contest_place9}
                            </Mem>
                        </BottomHalf1>
                        <BottomHalf2>
                            <Link to={'/hackathon'} style={hackStyle}>Learn more</Link>
                        </BottomHalf2>
                    </CardBottom>
                </Container>

                <Container>
                    <Card10>
                        <Span>{this.state.title10}</Span>
                    </Card10>
                    <CardBottom>
                        <BottomHalf1>
                            <Mem>
                                <img src={calendar} alt={"calendar"} sizes={'29px'}/>
                                {this.state.contest_date10}
                            </Mem>
                            <Mem>
                                <img src={place} alt={"place"}/>
                                {this.state.contest_place10}
                            </Mem>
                        </BottomHalf1>
                        <BottomHalf2>
                            <Link to={'/hackathon'} style={hackStyle}>Learn more</Link>
                        </BottomHalf2>
                    </CardBottom>
                </Container>

                <Container>
                    <Card11>
                        <Span>{this.state.title11}</Span>
                    </Card11>
                    <CardBottom>
                        <BottomHalf1>
                            <Mem>
                                <img src={calendar} alt={"calendar"} sizes={'29px'}/>
                                {this.state.contest_date11}
                            </Mem>
                            <Mem>
                                <img src={place} alt={"place"}/>
                                {this.state.contest_place11}
                            </Mem>
                        </BottomHalf1>
                        <BottomHalf2>
                            <Link to={'/hackathon'} style={hackStyle}>Learn more</Link>
                        </BottomHalf2>
                    </CardBottom>
                </Container>

            </Fragment>
        )
    }
}

let hackStyle = {
    textDecoration:'none',
    color:'#009688',
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    fontSize:'24px',
   marginTop:'4.5%'
}

const Mem = styled.div`
    width:100%;
`

const Margin = styled.div`
    margin-left:74%;
    display: flex;
  align-items: center;
`

const Container = styled.div`
    width: 100%;
    height: 55%;
`

const Nav = styled.div`
    width: 100%;
    height: 9%;
    fill: white;
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.5);
     display: flex;
  align-items: center;
`

const Card0 = styled.div`
    width: 95%;
    height:176px;
    background-image: url(https://onoffmix.com/images/event/147818/s);
    margin-top: 9px;
    margin-left: auto;
    margin-right: auto;
    font-style: Regular;
    font-size: 24px;
    text-align: left;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.25);
    color: white;
`


const Card1 = styled.div`
    width: 95%;
    height:176px;
    background-image: url(https://onoffmix.com/images/event/147569/s);
    margin-top: 9px;
    margin-left: auto;
    margin-right: auto;
    font-style: Regular;
    font-size: 24px;
    text-align: left;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.25);
    color: white;
`


const Card3 = styled.div`
    width: 95%;
    height:176px;
    background-image: url(https://onoffmix.com/images/event/148513/s);
    margin-top: 9px;
    margin-left: auto;
    margin-right: auto;
    font-style: Regular;
    font-size: 24px;
    text-align: left;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.25);
    color: white;
`

const Card4 = styled.div`
    width: 95%;
    height:176px;
    background-image: url(https://onoffmix.com/images/event/148912/s);
    margin-top: 9px;
    margin-left: auto;
    margin-right: auto;
    font-style: Regular;
    font-size: 24px;
    text-align: left;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.25);
    color: white;
`

const Card5 = styled.div`
    width: 95%;
    height:176px;
    background-image: url(https://onoffmix.com/images/event/148592/s);
    margin-top: 9px;
    margin-left: auto;
    margin-right: auto;
    font-style: Regular;
    font-size: 24px;
    text-align: left;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.25);
    color: white;
`

const Card6 = styled.div`
    width: 95%;
    height:176px;
    background-image: url(https://onoffmix.com/images/event/148514/s);
    margin-top: 9px;
    margin-left: auto;
    margin-right: auto;
    font-style: Regular;
    font-size: 24px;
    text-align: left;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.25);
    color: white;
`

const Card7 = styled.div`
    width: 95%;
    height:176px;
    background-image: url(https://onoffmix.com/images/event/148480/s);
    margin-top: 9px;
    margin-left: auto;
    margin-right: auto;
    font-style: Regular;
    font-size: 24px;
    text-align: left;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.25);
    color: white;
`

const Card8 = styled.div`
    width: 95%;
    height:176px;
    background-image: url(https://onoffmix.com/images/event/146732/s);
    margin-top: 9px;
    margin-left: auto;
    margin-right: auto;
    font-style: Regular;
    font-size: 24px;
    text-align: left;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.25);
    color: white;
`

const Card9 = styled.div`
    width: 95%;
    height:176px;
    background-image: url(https://onoffmix.com/images/event/148619/s);
    margin-top: 9px;
    margin-left: auto;
    margin-right: auto;
    font-style: Regular;
    font-size: 24px;
    text-align: left;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.25);
    color: white;
`

const Card10 = styled.div`
    width: 95%;
    height:176px;
    background-image: url(https://onoffmix.com/images/event/148534/s);
    margin-top: 9px;
    margin-left: auto;
    margin-right: auto;
    font-style: Regular;
    font-size: 24px;
    text-align: left;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.25);
    color: white;
`

const Card11 = styled.div`
    width: 95%;
    height:176px;
    background-image: url(https://onoffmix.com/images/event/148436/s);
    margin-top: 9px;
    margin-left: auto;
    margin-right: auto;
    font-style: Regular;
    font-size: 24px;
    text-align: left;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.25);
    color: white;
`



const Span = styled.div`
    margin: 10px;
`

const CardBottom = styled.div`
    width: 96%;
    height:128px;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5px;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.25);
`

const BottomHalf1 = styled.div`
    width: 100%;
    height: 50%;
    border-bottom: solid 1px rgba(0, 0, 0, 0.12);
   
`

const BottomHalf2 = styled.div`
    width: 100%;
    height: 50%;
  
`


export default Main;