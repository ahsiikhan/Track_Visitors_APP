import React from 'react';
import { StyleSheet, Alert, Pressable, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Login'
import Splash from './screens/Splash'
import GuardDashboard from './screens/GuardDashboard'
import { FontFamily } from './GlobalStyles';
import AdminDashboard from './screens/AdminDashboard';
import Users from './screens/Users';
import Floors from './screens/Floors';
import Locations from './screens/Locations';
import Cameras from './screens/Cameras';
import CameraConnections from './screens/CameraConnections';
import AddVisitor from './screens/AddVisitor'
import Visit from './screens/Visit'
import ProcessVideo from './screens/ProcessVideo'
import BlockVisitors from './screens/BlockVisitors'
import ResultedFrames from './screens/ResultedFrames';
import ResultedVideo from './screens/ResultedVideo'
import DemoVideos from './screens/DemoVideos'
import ShowPaths from './screens/ShowPaths'
import Alerts from './screens/Alerts';
import CurrentVisitors from './screens/CurrentVisitors'
import ExitVisitor from './screens/ExitVisitor';
import Report from './screens/Report';
import VisitPath from './screens/VisitPath';
import GuardsLocation from './screens/GuardsLocation';
import GuardSettings from './screens/GuardSettings';
import VisitPossiblePaths from './screens/VisitPossiblePaths';
import AdminSettings from './screens/AdminSettings';
import SavedLocations from './screens/SavedLocations';
import SavedCameras from './screens/SavedCameras';
import CheckPaths from './screens/CheckPaths';
import AdjacencyMatrix from './screens/AdjacencyMatrix'
import RestrictLocation from './screens/RestrictLocation';
import SearchVisitor from './screens/SearchVisitor'
import ReRoute from './screens/ReRoute';
import DirectorDashboard from './screens/DirectorDashboard';
import TodayVisitors from './screens/TodayVisitors';
import WeeklyVisitors from './screens/WeeklyVisitors'
import SearchTodayVisitors from './screens/SearchTodayVisitors'
import BlockedVisitors from './screens/BlockedVisitors'
import VisitorMode from './screens/VisitorMode'
import VisitorDashboard from './screens/VisitorDashboard'
import ConnectionUrl from './screens/ConnectionUrl';


const Stack = createNativeStackNavigator();

const App = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTitleStyle: {
                        color: '#0081a7',
                        fontFamily: FontFamily.poppinsRegular,
                        fontSize: 20,
                    },
                    headerTintColor: '#0081a7',
                    headerTitleAlign: 'center',
                    headerRight: () => <MenuButton navigation={navigation} />
                })}>
                <Stack.Screen name='Welcome' component={Splash}
                    options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login}
                    options={{ headerShown: false }} />
                <Stack.Screen name='GuardDashboard' component={GuardDashboard} options={{ headerTitle: 'Dashboard', headerShown: false }} />
                <Stack.Screen name='AddVisitor' component={AddVisitor} options={{ headerTitle: 'Register new visitor', headerShown: false }} />
                <Stack.Screen name='Visit' component={Visit} options={{ headerTitle: 'Add new visit', headerShown: false }} />
                <Stack.Screen name="ExitVisitor" component={ExitVisitor} options={{ headerTitle: 'End Visit', headerShown: false }} />
                <Stack.Screen name="Alerts" component={Alerts} options={{ headerTitle: 'Alerts', headerShown: false }} />
                <Stack.Screen name="CurrentVisitors" component={CurrentVisitors} options={{ headerTitle: 'Current Visitors', headerShown: false }} />
                <Stack.Screen name="VisitPath" component={VisitPath} options={{ headerTitle: 'Visit Current Path', headerShown: false }} />
                <Stack.Screen name="GuardSettings" component={GuardSettings} options={{ headerTitle: 'Settings', headerShown: false }} />
                <Stack.Screen name="VisitorMode" component={VisitorMode} options={{ headerTitle: 'Visitor Mode', headerShown: false }} />

                <Stack.Screen name="ConnectionUrl" component={ConnectionUrl} options={{ headerTitle: 'Connection URL', headerShown: false }} />


                <Stack.Screen name='AdminDashboard' component={AdminDashboard} options={{ headerTitle: 'Dashboard', headerShown: false }} />
                <Stack.Screen name='Users' component={Users} options={{ headerShown: false }} />
                <Stack.Screen name='Floors' component={Floors} options={{ headerShown: false }} />
                <Stack.Screen name='Locations' component={Locations} options={{ headerShown: false }} />
                <Stack.Screen name='SavedLocations' component={SavedLocations} options={{ headerTitle: 'Saved Locations', headerShown: false }} />
                <Stack.Screen name='Cameras' component={Cameras} options={{ headerShown: false }} />
                <Stack.Screen name='SavedCameras' component={SavedCameras} options={{ headerTitle: 'Saved Cameras', headerShown: false }} />
                <Stack.Screen name='CameraConnections' component={CameraConnections} options={{ headerTitle: 'Camera Connections', headerShown: false }} />
                <Stack.Screen name='BlockVisitors' component={BlockVisitors} options={{ headerShown: false }} />
                <Stack.Screen name="Report" component={Report} options={{ headerTitle: 'Visitor Reports', headerShown: false }} />
                <Stack.Screen name="GuardsLocation" component={GuardsLocation} options={{ headerTitle: 'Guards Location', headerShown: false }} />
                <Stack.Screen name='ProcessVideo' component={ProcessVideo} options={{ headerTitle: 'Process camera video' }} />
                <Stack.Screen name='ResultedFrames' component={ResultedFrames} options={{ headerTitle: 'Result' }} />
                <Stack.Screen name='ResultedVideo' component={ResultedVideo} options={{ headerTitle: 'Result' }} />
                <Stack.Screen name="DemoVideos" component={DemoVideos} />
                <Stack.Screen name="ShowPaths" component={ShowPaths} options={{ headerTitle: 'Paths', headerShown: false }} />
                <Stack.Screen name="AdminSettings" component={AdminSettings} options={{ headerTitle: 'Settings', headerShown: false }} />
                <Stack.Screen name="VisitPossiblePaths" component={VisitPossiblePaths} options={{ headerTitle: 'Destination Paths', headerShown: false }} />
                <Stack.Screen name="CheckPaths" component={CheckPaths} options={{ headerTitle: 'Paths', headerShown: false }} />
                <Stack.Screen name="AdjacencyMatrix" component={AdjacencyMatrix} options={{ headerTitle: 'Camera Connections', headerShown: false }} />
                <Stack.Screen name="RestrictLocation" component={RestrictLocation} options={{ headerTitle: 'Restrict Location', headerShown: false }} />
                <Stack.Screen name="SearchVisitor" component={SearchVisitor} options={{ headerTitle: 'Search Visitor', headerShown: false }} />
                <Stack.Screen name="ReRoute" component={ReRoute} options={{ headerTitle: 'Re Route Visitor', headerShown: false }} />

                <Stack.Screen name="DirectorDashboard" component={DirectorDashboard} options={{ headerTitle: 'Director Dashboard', headerShown: false }} />
                <Stack.Screen name="TodayVisitors" component={TodayVisitors} options={{ headerTitle: 'Today Visitors', headerShown: false }} />
                <Stack.Screen name="WeeklyVisitors" component={WeeklyVisitors} options={{ headerTitle: 'Weekly Visitors', headerShown: false }} />
                <Stack.Screen name="SearchTodayVisitors" component={SearchTodayVisitors} options={{ headerTitle: 'Weekly Visitors', headerShown: false }} />
                <Stack.Screen name="BlockedVisitors" component={BlockedVisitors} options={{ headerTitle: 'Blocked Visitors', headerShown: false }} />
                <Stack.Screen name="VisitorDashboard" component={VisitorDashboard} options={{ headerTitle: 'Visitor Dashboard', headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer >
    )
};

export default App;


const MenuButton = ({ navigation }) => {
    const [showMenu, setShowMenu] = React.useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
        console.warn(showMenu);
    };

    const handleLogout = () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to sign out?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => navigation.navigate('Login'),
                    style: 'destructive',
                },
            ],
            {
                cancelable: true,
                onDismiss: () => { },
            }
        );
    };
};


const styles = StyleSheet.create({
    logout: {
        color: '#0081A7',
        textAlign: 'right',
        fontSize: 15,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
    },
    dotIcon: {
        width: 25,
        height: 25,
    },
    icons: {
        width: 16,
        height: 25,
    },
})