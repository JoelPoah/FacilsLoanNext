"use client";

import {Authenticator, View, Image, useTheme,Text} from "@aws-amplify/ui-react";


const components = {
    Header() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt="Hope logo"
            src="/hope.svg"
            backgroundColor="black"
            
          />
        </View>
      );
    },

    Footer() {
        const { tokens } = useTheme();
    
        return (
          <View textAlign="center" padding={tokens.space.large}>
            <Text color={tokens.colors.neutral[80]}>
              &copy; All Rights Reserved
            </Text>
          </View>
        );
      },
    
}
const AuthClient = () =>{
    return <Authenticator components={components}/>;
};

export default AuthClient;