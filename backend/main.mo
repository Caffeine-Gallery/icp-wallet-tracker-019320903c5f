import Nat "mo:base/Nat";

import Time "mo:base/Time";
import Array "mo:base/Array";
import Int "mo:base/Int";
import Float "mo:base/Float";

actor {
    // Define the data structure for wallet statistics
    type WalletData = {
        timestamp: Int;
        count: Nat;
    };

    // Stable variable to store historical data
    stable var walletData : [WalletData] = [];

    // Initialize with some sample data
    stable let initialData : [WalletData] = [
        { timestamp = 1672531200000; count = 100000 }, // Jan 2023
        { timestamp = 1675209600000; count = 150000 }, // Feb 2023
        { timestamp = 1677628800000; count = 200000 }, // Mar 2023
        { timestamp = 1680307200000; count = 250000 }, // Apr 2023
        { timestamp = 1682899200000; count = 300000 }, // May 2023
        { timestamp = 1685577600000; count = 400000 }, // Jun 2023
        { timestamp = 1688169600000; count = 500000 }, // Jul 2023
        { timestamp = 1690848000000; count = 600000 }, // Aug 2023
        { timestamp = 1693526400000; count = 700000 }, // Sep 2023
        { timestamp = 1696118400000; count = 800000 }, // Oct 2023
        { timestamp = 1698796800000; count = 900000 }, // Nov 2023
        { timestamp = 1701388800000; count = 1000000 }, // Dec 2023
        { timestamp = 1704067200000; count = 1200000 }, // Jan 2024
    ];

    // Initialize the data if empty
    if (walletData.size() == 0) {
        walletData := initialData;
    };

    // Query call to get all wallet data
    public query func getWalletData() : async [WalletData] {
        walletData
    };

    // System functions for upgrade persistence
    system func preupgrade() {
        // Data is already in stable storage
    };

    system func postupgrade() {
        // Data is already in stable storage
    };
}
