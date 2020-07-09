import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import LoadingDiv from "../components/loadingDiv";
import WentWrong from "../components/wentWrong";

class ClientReviewPage extends Component {
    
    constructor() {
        super();
        this.state={
            DataList:[],
            isLoading:false,
            isError:false,
            rowDataId:"",
            deleteBtnText:"Delete"
        }
        this.dataDelete=this.dataDelete.bind(this);
    }

    componentDidMount() {
        Axios.get('/reviewList').then((response)=>{
            if(response.status==200){
                this.setState({DataList:response.data, isLoading:false, isError:false})
            }else{
                this.setState({isLoading:false, isError:true})
            }
        }).catch((error)=>{
            this.setState({isLoading:false, isError:true})

        })

    }

dataDelete(){
    let confirmResult= confirm("Do you want to Delete??")
    if(confirmResult===true){
        this.setState({deleteBtnText:"Deleting..."})
    
    Axios.post('/reviewDelete', {id:this.state.rowDataId}).then((response)=>{
        if(response.data==1 && response.status==200){
            this.setState({deleteBtnText:"Delete Success"});
            this.componentDidMount();
            setTimeout(function(){
                this.setState({deleteBtnText:"Delete"})
            }.bind(this),2000)
        }else{
            this.setState({deleteBtnText:"Delete Fail"});
            setTimeout(function(){
                this.setState({deleteBtnText:"Delete"})
            }.bind(this),2000)
        }
    }).catch((error)=>{
        this.setState({deleteBtnText:"Delete Fail..."})
        setTimeout(function () {
            this.setState({deleteBtnText:"Delete"})
        }.bind(this),2000)
    })
}
}



    render() {

        if(this.state.isLoading===true){
            return (
                <Menu title="Reviews">
                    <Container>
                        <LoadingDiv/>
                    </Container>
                </Menu>
            )
        }
        else if(this.state.isError==true){
            return (
                <Menu title="Reviews">
                    <Container>
                        <WentWrong/>
                    </Container>
                </Menu>
            )
       }else{
           const data= this.state.DataList;
           const column=[
               {dataField:'id', text:'ID'},
               {dataField:'name', text:'Review Name'},
               {dataField:'desc', text:'Reviews'},
               {dataField:'image', text:'Image'},

           ]
            const selectRow={
                mode:'radio',
                onSelect:(row, isSelect, rowIndex)=>{
                    this.setState({rowDataId:row['id']})
            }
            }




           return (
               <Fragment>
                   <Menu title="Reviews">
                       <Container>
                           <Row>
                               <Col md={12} sm={12} lg={12}>
           <button onClick={this.dataDelete} className="normal-btn my-2 btn">{this.state.deleteBtnText}</button>
                                   <BootstrapTable
                                       keyField='id'
                                       data={ data }
                                       columns={ column }
                                       selectRow={selectRow}
                                       pagination={ paginationFactory() } />

                               </Col>

                           </Row>
                       </Container>
                   </Menu>

               </Fragment>
           );
       }
    }
}

export default ClientReviewPage;
