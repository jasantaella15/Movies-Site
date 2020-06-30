import React, {Component} from 'react';
import {fetchVideosList} from '../../api';
import { connect} from "react-redux";
import {Helmet} from "react-helmet";
import qs from 'qs';
import GridOfVideos from '../organisms/gridOfVideos';
import SearchBar from '../molecules/searchBar';
import Button from '../atoms/button';
import ButtonsGroup from '../molecules/buttonsGroup';
import Title from '../atoms/title';

const _categories = {
  1: "fiction",
  2: "terror",
  4: "action",
  8: "romantic"  
};

class Home extends Component{
  constructor(props) {
    super(props);
    let param = qs.parse(props.location.search,{ ignoreQueryPrefix: true });
    this.state = {
      search: param.title,
      title: param.title,
      order: param.order,
      cat: param.cat
    };    
    this.handleChange = this.handleChange.bind(this);    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addParam = this.addParam.bind(this);
    this.getVideoList = this.getVideoList.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
    this.handleCat = this.handleCat.bind(this);
    this.getCat = this.getCat.bind(this);
  }

  static initialAction() {
    return fetchVideosList();
  }  
  handleChange(event) {
    this.setState({search: event.target.value});
  }
  handleOrder(event) {
    this.setState({order: event.target.value},() =>{
    localStorage.setItem('order', this.state.order);
      this.handleSubmit(event);
    });
  }
  handleCat(event) {
    let cat = this.state.cat || '0';
    cat = cat ^ event.target.value;    
    this.setState({cat: cat},() =>{
    localStorage.setItem('cat', this.state.cat);
      this.handleSubmit(event);
    });
  }
  handleSubmit(event) {
    let search = qs.stringify({title : this.state.search , order : this.state.order , cat: this.state.cat})
    this.setState({title:this.state.search}, ()=> this.props.history.push({ pathname: '/', search: search}));
    event.preventDefault();
  }
  componentDidMount() {
    if (!this.props.videoList) {
      this.props.dispatch(Home.initialAction());
    }
    if(!this.state.order || !this.state.cat){
    let order = localStorage.getItem('order');
    let cat = localStorage.getItem('cat');
    let search = qs.stringify({title : this.state.search , order : order || 'rating', cat: cat || 0})
    this.setState({title:this.state.search, order :order, cat: cat }, ()=> this.props.history.push({ pathname: '/', search: search}));
    }
  }
  getCat(){
    let cat  = this.state.cat || '0';
    let catList = [];
    for (let key in _categories) {      
      if(key & cat)catList.push(_categories[key]);
    }
    return catList.length > 0 ? catList : false;
  }
  getVideoList(){
    let {videoList} = this.props;
    let title = this.state.title || false;
    let order = this.state.order || 'rating';
    let cat = this.getCat();
    const sortFunctions = {
      year : (a,b) => b.year - a.year,
      rating : (a,b) => b.rate - a.rate
    }
    videoList = (videoList && title) ? videoList.filter(v => v.title.toLowerCase().indexOf(title.toLowerCase()) !== -1) : videoList;
    videoList = (videoList && cat) ? videoList.filter(v=> cat.includes(v.category)) : videoList;
    videoList = (videoList && order) ? videoList.sort(sortFunctions[order]): videoList;
    return videoList && videoList.length > 0 ? videoList : false;
  }
  addParam(param){
    return `/?${qs.stringify({...qs.parse(this.props.location.search,{ ignoreQueryPrefix: true }), ...param})}`;
  }
    render(){
      let videoList = this.getVideoList();
      let categories = this.getCat();
      let orderButtons ={
        text: 'Order By',
        buttons: [{value: 'year', text:'Year'}, {value : 'rating', text:'Rating'}],
        handler: this.handleOrder,
        state: this.state.order
      };
      let catButtons ={
        text : 'Categories',
        buttons: [],
        handler: this.handleCat,
      };
      Object.keys(_categories).map(key =>{
        let isActive = categories && categories.includes(_categories[key]) ? true: false ;
        catButtons.buttons.push({
          value: key,
          isActive: isActive,
          text: _categories[key]
        })
      })
        return(
        <div>

        <Helmet>
        <title>{`Movies Search ${this.state.title || ""}`}</title>
        </Helmet>

        <Title text="Find your movie here"></Title>
        <SearchBar onClick={this.handleSubmit} onChange={this.handleChange} value={this.state.search}></SearchBar>

        <ButtonsGroup data={catButtons}></ButtonsGroup>
        <ButtonsGroup data={orderButtons}></ButtonsGroup>

        {!videoList && this.state.title &&
        <h2>Titulo no encontrado</h2>
        }
      <GridOfVideos videoList={videoList}></GridOfVideos>
          </div>
        )
    }
}

const mapStateToProps = state => ({
    videoList: state.videoList
  });

export default connect(mapStateToProps)(Home);