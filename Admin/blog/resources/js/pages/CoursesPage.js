import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import LoadingDiv from "../components/loadingDiv";
import WentWrong from "../components/wentWrong";

class CoursesPage extends Component {

constructor(){
    super();
this.state={
        dataList:[],
        isLoading:false,
        isError:false,
        rowDataId:"",
        deleteBtnText:"Delete"
}
this.dataDelete=this.dataDelete.bind(this);
}

componentDidMount(){
    Axios.get('/courseList').then((response)=>{
        if(response.status==200){
            this.setState({dataList:response.data, isLoading:false, isError:false})
        }else{
            this.setState({isLoading:false, isError:true});
        }
    }).catch((error)=>{
        this.setState({isLoading:false, isError:true})
    });
}

dataDelete(){
    let confirmResult= confirm("Do you want to Delete??")
    if(confirmResult===true){
        this.setState({deleteBtnText:"Deleting..."})
    
    Axios.post('/courseDelete', {id:this.state.rowDataId}).then((response)=>{
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
        if(this.state.isLoading==true){
            return (
            <Menu title="Courses">
                <Container>
                <LoadingDiv/>
            </Container>
    </Menu>
        )
     }else if(this.state.isError==true){
         return(
            <Menu title="Courses">
            <Container>
            <WentWrong/>
        </Container>
</Menu>   
         )
     }else{
         const data= this.state.dataList;
         const column=[
             {dataField:'id', text:'ID'},
             {dataField:'course_name', text:'Course Name'},
             {dataField:'course_desc', text:'Course Description'},
             {dataField:'course_fee', text:'Course Fee'},
             {dataField:'course_totalClass', text:'Course Total class'},

         ]
         const selectRow={
             mode:'radio',
             onSelect:(row, isSelect, rowIndex)=>{
                 this.setState({rowDataId:row['id']})
             }
         }

         return(
             <Fragment>
                 <Menu title="Courses">
                     <Container>
                         <Row>
                             <Col md={12} sm={12} lg={12}>
    <button onClick={this.dataDelete} className="normal-btn my-2 btn">{this.state.deleteBtnText}</button>
    <BootstrapTable
        keyField='id'
        data={data}
        columns={column}
        selectRow={selectRow}
        pagination={paginationFactory()} />

                             </Col>
                         </Row>
                     </Container>
                 </Menu>
             </Fragment>
         )
     }
        
    }
}

export default CoursesPage;
