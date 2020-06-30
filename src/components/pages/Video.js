import React, {Component} from 'react';
import { connect} from "react-redux";
import { fetchVideoById } from '../../api';
import qs from 'qs';
import {Helmet} from "react-helmet";
import Movie from '../atoms/video';
import Title from '../atoms/title';

class Video extends Component{
    constructor(props) {
      super(props);
      this.state = {
        video: props.video
      };
    }
  static initialAction(query) {
    return fetchVideoById(query.id);
  }  
  componentDidMount() {
      window.scrollTo(0, 0)
      let query = qs.parse(this.props.location.search,{ ignoreQueryPrefix: true });
      let videoList = this.props.videoList;
      let video = videoList ? videoList.find(v => v.id == query.id) : undefined;
      if(video === undefined) return this.props.dispatch(Video.initialAction(query));
      this.setState({video: video});    

  }
    render(){
    const video = this.state.video;
        return(
            <div>
              
          <Helmet>
        <title>{video ? video.title : 'loading'}</title>
          </Helmet>
                {video &&
                <div>
                    <Title text={video.title}></Title>
                    <Movie src={video.link}></Movie>
                </div>
                }

            </div>        
        )
    }
}
const mapStateToProps = state => ({
    video: state.video,
    videoList: state.videoList
  });

export default connect(mapStateToProps)(Video);