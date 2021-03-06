import React from 'react';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock';

import {GlobalContextProvider} from '../../core/context/sniffed.repositories.context'
import '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';

import {StackNavigation} from './stack.navigation';
import {cleanup, render} from '@testing-library/react-native';

jest.mock('@react-native-community/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);


function makeSut(isLogged = false) {
  return render(
    <NavigationContainer>
      <GlobalContextProvider>
        <StackNavigation isLogged={isLogged} />
      </GlobalContextProvider>
    </NavigationContainer>,
  );
}

describe('Stack Navigation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('Should render correctly', () => {
    const sut = makeSut();
    expect(sut.toJSON()).toMatchSnapshot();
  });

  it('Should set signin to initial route is not have user logged', () => {
    const sut = makeSut();
    const inputSignin = sut.findByPlaceholderText('Github user');
    expect(inputSignin).toBeTruthy();
  });

  // it('Should set dashboard navigation to initial route is not have user logged', () => {
  //   const sut = makeSut(true);
  //   const dashboardText = sut.findByText('Configured Repos: 0');
  //   expect(dashboardText).toBeTruthy();
  // });
});
