import * as React from 'react';
import { connect } from 'react-redux';
import * as styled from 'styled-components';
import { Input, Form, Icon, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { displayUser } from './Action';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

const Bind = styled.default.div`
width: 100%;
height: 100%;
display: flex;
flex: 1 1 0%;
align-items: center;
justify-content: center;
font-size: 1.5em;
color: purple;
background: linear-gradient(154deg,#008fe2,#00b29c);
background-color: transparent !important;
  
`;
const FormPage = styled.default.div`
    width: 400px;
    position: absolute;
    top: 100px;
  
`;
const DisplayFormButton = styled.default.div`
    width: 100px;
   
  
`;

type Props = StateProps & DispatchProps & {

};

interface StateProps {
}

interface DispatchProps {
    sendData: (data: any) => {};
}

export class ComponentFirst extends React.Component<Props> {

    state = {

        userName: '',
        password: '',

    };
    usernameChange = (e: string) => {
        let userName = e;
        this.setState({
            userName: userName
        });

    }
    passwordCahnge = (e: string) => {
        let password = e;
        this.setState({
            password: password
        });

    }
    onDisplay = () => {
        this.props.sendData({ userName: this.state.userName, password: this.state.password });
    }
    render() {

        return (
            <Bind>
                <FormPage>
                    <Form>
                        <FormItem>
                            <Input
                                placeholder="Enter Username"
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.
                                    usernameChange(e.target.value)}
                            />
                        </FormItem>
                        <FormItem>
                            <Input
                                placeholder="Enter Password"
                                type="password"
                                prefix={<Icon type="password" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.
                                    passwordCahnge(e.target.value)}
                            />
                        </FormItem>
                        <FormItem>
                            <DisplayFormButton>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    style={{ width: '400px' }}
                                    onClick={this.onDisplay}
                                >

                                    Display
                                </Button>
                            </DisplayFormButton>
                        </FormItem>
                    </Form>
                </FormPage>
            </Bind>
        );
    }
}
const mapStateToProps = (store: any) => {
    return {
        // cartItems: selCartItems(store)
    };
};

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    {
        sendData: displayUser
    }
)(ComponentFirst);