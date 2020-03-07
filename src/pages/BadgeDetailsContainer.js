import React from 'react';

import BadgeDetails from './BadgeDetails';
import PageError from '../components/PageError';
import PageLoading from '../components/PageLoading';

import api from '../api';

class BadgeDetailsContainer extends React.Component {

  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      );
      this.setState({ loading: false, data })
    } catch (error) {
      this.setState({ loading: false, error })
    }
  }

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false })
  }

  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true })
  }

  render() {
    if (this.state.loading) {
      return (<PageLoading />);
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />
    }
    return (
      <BadgeDetails
      onCloseModal={this.handleCloseModal}
      onOpenModal={this.handleOpenModal}
      modalIsOpen={this.state.modalIsOpen}
       badge={this.state.data}/>
    );
  }

}


export default BadgeDetailsContainer;