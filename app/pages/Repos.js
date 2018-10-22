import React, { Component } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Modal, Picker, Button, TouchableOpacity } from "react-native";
import RepoItem from '../components/RepoItem';
import { Icon } from 'native-base';
import { get } from '../http/index';
import pxToDp from '../utils/index';

const REQUEST_URL = 'https://api.github.com/search/repositories?q=javascript&sort=stars&per_page=10&page=';
let pageNo = 1;//当前第几页
let totalPage = 5;//总的页数
let languages = ['JavaScript', 'Java', 'C', 'Ruby', 'Python', 'C++', 'C#', 'Node', 'Html', 'Css', 'Go']
export default class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: false,
      dataArray: [],
      showFoot: 0,
      isRefreshing: false,
      language: 'JavaScript',
      tempLang: 'JavaScript',
      modalVisible: false
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle:
        <Text onPress={() => {
          navigation.state.params.setModalVisible(true)
        }}>
          <Text style={styles.title} >
            {navigation.getParam('title')}&nbsp;
          </Text>
          <Icon name="triangle-down" type="Octicons" style={styles.titleIcon} />
        </Text>,
    };
  };

  fetchData({ language = this.state.language, pageNo = 1 }) {
    console.log(language)
    get(`https://api.github.com/search/repositories?q=${language}&sort=stars&per_page=10&page=${pageNo}`)
      .then((data) => {
        const { isRefreshing, showFoot } = this.state;
        let foot = 0;
        if (pageNo >= totalPage) {
          foot = 1;//listView底部显示没有更多数据了
        }
        this.setState({
          dataArray: isRefreshing ? data.items : this.state.dataArray.concat(data.items),
          isLoading: false,
          showFoot: foot,
          isRefreshing: false
        });
      })
      .catch(err => {
        this.setState({
          error: true,
          isLoading: false,
          showFoot: 1,
          isRefreshing: false
        });
      })
  }

  componentDidMount() {
    //请求数据
    this.props.navigation.setParams({
      title: this.state.language,
      setModalVisible: this.setModalVisible
    });

    this.fetchData({ pageNo });
  }

  //加载等待页
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={true}
          color='#159951'
          size="small"
        />
      </View>
    );
  }

  _keyExtractor = (item, index) => (item.id + '');

  _onRefresh = () => {
    this.setState({
      isRefreshing: true,
    }, () => {
      pageNo = 1;
      this.fetchData({ pageNo });
    });
  };

  _separator() {
    return <View style={{ height: pxToDp(1), backgroundColor: '#ccc' }} />;
  }

  _renderFooter = () => {
    if (this.state.showFoot === 1) {
      return (
        <View style={styles.footer}>
          <Text style={styles.loadmoreTxt}>
            no more data :)
          </Text>
        </View>
      );
    } else if (this.state.showFoot === 2) {
      return (
        <View style={styles.footer}>
          <ActivityIndicator
            style={styles.loadmore}
            animating={true}
            color='#159951'
            size="small" />
          <Text style={styles.loadmoreTxt}>loading more...</Text>
        </View>
      );
    } else if (this.state.showFoot === 0) {
      return (
        <View style={styles.footer}>
          <Text></Text>
        </View>
      );
    }
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  _onEndReached = () => {
    if (this.state.showFoot != 0) {
      return;
    }
    if ((pageNo != 1) && (pageNo >= totalPage)) {
      return;
    } else {
      pageNo++;
    }
    this.setState({ showFoot: 2 }, () => {
      this.fetchData({ pageNo });
    });
  }

  onLangChange = (itemValue, itemIndex) => {
    this.setState({
      language: itemValue
    });
  }

  onCancelChange = () => {
    const { tempLang } = this.state;
    this.setState({
      language: tempLang,
      modalVisible: false
    });
  }

  onConfirmChange = () => {
    const { language } = this.state;
    this.props.navigation.setParams({
      title: language,
    });
    this.setState({
      tempLang: language,
      isRefreshing: true,
      modalVisible: false
    }, () => {
      this.fetchData({ pageNo })
    });
  }

  render() {
    const { dataArray, isRefreshing, language } = this.state;

    return (
      <View>
        <Modal
          style={{ height: pxToDp(200) }}
          transparent={true}
          animationType="slide"
          visible={this.state.modalVisible}
        >
          <View style={styles.modalView}>
            <View style={styles.btns}>
              <TouchableOpacity  onPress={this.onCancelChange}  activeOpacity={0.5} focusedOpacity={0.8}>
                <Text style={styles.cancelBtn}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={this.onConfirmChange}  activeOpacity={0.5} focusedOpacity={0.8}>
                <Text style={styles.confirmBtn}>确定</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Picker
                selectedValue={language}
                onValueChange={this.onLangChange}>
                {
                  languages.map((item, index) => (
                    <Picker.Item key={index} label={item} value={item} />
                  ))
                }
              </Picker>
            </View>

          </View>
        </Modal>

        <FlatList
          data={dataArray}
          refreshing={isRefreshing}
          onEndReachedThreshold={1}
          onRefresh={this._onRefresh}
          onEndReached={this._onEndReached}
          renderItem={(item) => (
            <RepoItem {...item}></RepoItem>
          )}
          keyExtractor={this._keyExtractor}
          ListFooterComponent={this._renderFooter.bind(this)}
          ItemSeparatorComponent={this._separator}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  footer: {
    flexDirection: 'row',
    height: pxToDp(80),
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadmore: {
    marginRight: pxToDp(12)
  },
  loadmoreTxt: {
    fontSize: pxToDp(24),
    color: '#666'
  },
  title: {
    color: '#fff',
    fontSize: pxToDp(36),
    fontWeight: '500',
    marginRight: pxToDp(20)
  },
  titleIcon: {
    color: '#fff',
    fontSize: pxToDp(30),
    fontWeight: '500',
    position: 'absolute',
    top: 0
  },
  btn: {
    width: '100%',
    height: pxToDp(60),
    backgroundColor: '#159951',
    lineHeight: pxToDp(60),
    color: '#fff'
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
    height: pxToDp(500),
    width: '100%',
    backgroundColor: '#fff',
    borderTopColor: '#ccc',
    borderTopWidth: pxToDp(1)
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: pxToDp(80),
    borderBottomColor: '#ccc',
    borderBottomWidth: pxToDp(1)
  },
  cancelBtn: {
    lineHeight: pxToDp(80),
    height: pxToDp(80),
    color: '#666',
    fontSize: pxToDp(32),
    paddingHorizontal: pxToDp(30)
  },
  confirmBtn: {
    color: '#159951',
    fontSize: pxToDp(32),
    paddingHorizontal: pxToDp(30),
    lineHeight: pxToDp(80),
    height: pxToDp(80),
  }
});

