import {Component} from 'react'

import {
  MainContainer,
  EditContainer,
  Heading,
  InputAndEditButton,
  Text,
  InputBox,
  SaveButton,
} from './StyledComponents'

class EditableTextInput extends Component {
  state = {
    isSaveButton: false,
    inputValue: '',
  }

  onClickSave = () => {
    this.setState(prev => ({isSaveButton: !prev.isSaveButton}))
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {isSaveButton, inputValue} = this.state

    return (
      <MainContainer>
        <EditContainer>
          <Heading>Editable Text Input</Heading>
          <InputAndEditButton>
            {isSaveButton ? (
              <Text>{inputValue}</Text>
            ) : (
              <InputBox
                value={inputValue}
                onChange={this.onChangeInput}
                type="text"
              />
            )}
            <SaveButton type="button" onClick={this.onClickSave}>
              {isSaveButton ? 'Edit' : 'Save'}
            </SaveButton>
          </InputAndEditButton>
        </EditContainer>
      </MainContainer>
    )
  }
}

export default EditableTextInput
