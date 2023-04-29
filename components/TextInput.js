import React from "react";
import Image from "next/image";

function TextInput() {
    return (
        <div className="flex justify-center">
            <div className="fixed w-3/5 bottom-0 flex bg-black px-4 mb-16 py-1 rounded-lg">
                <div className="bg-transparent flex-1 py-2 px-2 outline-none">
                    <label for="instruction" className="text-white">
                        Ask AI --
                    </label>
                    <select
                        id="instruction"
                        name="instruction"
                        autocomplete="instruction"
                        class="pc adp aev alh ari ath auc axm bmt bmy bmz bnl chs"
                    >
                        <option>Question?</option>
                        <option>A1</option>
                        <option>A2</option>
                        <option>A3</option>
                    </select>
                </div>
                <input
                    type="text"
                    name="entry"
                    id="entry"
                    className="text-white bg-black px-5 w-3/4"
                    placeholder="Hey AI, I don't understand..."
                ></input>
            </div>
        </div>
    );
}

export default TextInput;
