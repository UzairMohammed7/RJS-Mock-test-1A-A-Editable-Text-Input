import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #f5d0fe;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const EditContainer = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  width: 350px;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 40px;
`

export const Heading = styled.h1`
  color: #000000;
  font-family: 'Roboto';
  font-size: 22px;
`
export const InputAndEditButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
export const InputBox = styled.input`
  font-size: 14px;
  color: #323f4b;
  font-family: 'Roboto';
  border: 1px solid #cbd2d9;
  outline: none;
  padding-left: 15px;
  padding: 5px;
  height: 35px;
  width: 100%;
`
export const Text = styled.p`
  color: #323f4b;
  font-family: 'Roboto';
  font-size: 14px;
  padding-left: 15px;
  padding: 5px;
  height: 30px;
`
export const SaveButton = styled.button`
  background-color: #d946ef;
  color: #ffffff;
  font-family: 'Roboto';
  width: 80px;
  height: 35px;
  border-radius: 5px;
  font-size: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 15px;
`
