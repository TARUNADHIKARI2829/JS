function swap ( account1 , account2 ){
            account1 = account1 + account2
            account2 = account1 - account2
            account1 = account1 - account2

            console.log(`t have ${account1} r have ${account2}`);       
}
swap(1000,2000);
