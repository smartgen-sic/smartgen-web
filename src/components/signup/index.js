import React, { useState } from "react";
import "./Signup.css";
import { useDispatch } from "react-redux";
import { registerActions } from "../../redux/actions/Signup.actions";
import { useHistory } from "react-router-dom";

export default function Signup() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [register, setRegister] = useState({
        username: "",
        nama: "",
        password: "",
    });

    const handleChange = (field, value) => {
        setRegister((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    return (
        <body>
            <center>
                <div className="smartgen-signup">
                    <p>SmartGen</p>
                </div>
                <div className="subtittle-signup">
                    <p>Sign up your account</p>
                </div>
                <form
                    onSubmit={(e) =>
                        dispatch(registerActions(register, e, history))
                    }
                >
                    <input
                        className="field-signup"
                        type="text"
                        placeholder="Email address"
                        aria-label=".form-control-sm example"
                        value={register.username}
                        onChange={(e) =>
                            handleChange("username", e.target.value)
                        }
                    />
                    <input
                        className="field-pw-again"
                        type="text"
                        placeholder="   "
                        aria-label=".form-control-sm example"
                        value={register.nama}
                        onChange={(e) => handleChange("nama", e.target.value)}
                    />
                    <input
                        className="field-pw"
                        type="password"
                        placeholder="........"
                        aria-label=".form-control-sm example"
                        value={register.password}
                        onChange={(e) =>
                            handleChange("password", e.target.value)
                        }
                    />
                    <button className="button-sign-up">Sign up</button>{" "}
                </form>
            </center>
        </body>
    );
}
