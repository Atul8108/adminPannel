import React from 'react'
import './UserDetail.css'
import { FaWpforms } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { USERINFO } from '../../api/locaStorage.data'

const UserDetail = () => {
    const navigate = useNavigate();

    function onFileSelect(e) {
        document.getElementById("pic-preview").src = URL.createObjectURL(e.target.files[0])
    }

    async function handleSubmit(e) {
        const firstname = document.getElementById("firstname")
        const lastname = document.getElementById("lastname")
        const email = document.getElementById('inputEmail')
        const addressOne = document.getElementById('inputAddress1')
        const city = document.getElementById('inputCity')
        const states = document.getElementById("inputState")
        const profile_img = document.getElementById("pic-preview").src

        let userData = {
            "userName": firstname?.value,
            "lastName": lastname?.value,
            "email": email?.value,
            "addressOne": addressOne?.value,
            "city": city?.value,
            "states": states?.value,
            "profileImg": profile_img
        }
        userData.isComplete = Object.keys(userData).every((k) => !userData[k] == "");
        localStorage.setItem('userInfo', JSON.stringify(userData));

        navigate("/Dashbord", { replace: true })

        firstname.value = null
        lastname.value = null
        email.value = null
        addressOne.value = null
        city.value = null
    }
    const userData = JSON.parse(USERINFO())

    return (
        <>
            <div className='form-container'>
                <div className='inside-content'>
                    <img className='hero-img' src='https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80' alt='form-info' />

                    <div className='form-data'>
                        <h4 className='text-center'><FaWpforms />&nbsp;Fill Your Personal Details</h4>
                        <div className="container-fluid ">
                            <div className="row form_details_mb">
                                <div className="form-group col-md-6 mt-2">
                                    <label for="inputName">Name</label>
                                    <input defaultValue={userData?.userName} type="first name" className="form-control" id="firstname" placeholder="first name" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputName">Last Name</label>
                                    <input defaultValue={userData?.lastName} type="last name" className="form-control" id="lastname" placeholder="last name" />
                                </div>
                                <div className="form-group col-md-12">
                                    <div className="App d-flex ">
                                        <label for="profile_Image" className="custom_upload">
                                            <i class="fa fa-2x fa-camera"></i><h5 className='m-0'>Upload Pic</h5>
                                            <input className='file' onChange={(e) => onFileSelect(e)} type="file" id='profile_Image' style={{ Color: "blue" }} />
                                        </label>

                                        <img defaultValue={userData?.profileImg} className='pic-preview' id='pic-preview' src={userData?.profileImg} alt="" style={{ height: '76px', width: '70px', borderRadius: '100%', objectFit: 'cover', marginLeft: '250px' }} />
                                    </div>
                                </div>
                                <div className="form-group col-md-12">
                                    <label for="inputEmail">Email</label>
                                    <input defaultValue={userData?.email} type="email" className="form-control" id="inputEmail" placeholder="Email" />
                                </div>
                                <div className="form-group col-md-12">
                                    <label for="inputAddress">Address</label>
                                    <input defaultValue={userData?.addressOne} type="text" className="form-control" id="inputAddress1" placeholder="1234 Main St" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputCity">City</label>
                                    <input defaultValue={userData?.city} type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputState">State</label>
                                    <select defaultValue={userData?.states} id="inputState" className="form-control">
                                        <option selected disabled>Choose...</option>
                                        <option value="Andra Pradesh">Andra Pradesh</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madya Pradesh">Madya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Orissa">Orissa</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttaranchal">Uttaranchal</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="West Bengal">West Bengal</option>
                                        <option disabled style={{ backgroundColor: "#aaa", color: '#fff' }}>UNION Territories</option>
                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                        <option value="Daman and Diu">Daman and Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Lakshadeep">Lakshadeep</option>
                                        <option value="Pondicherry">Pondicherry</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className='row'>
                                <div className="col-md-6 ms-auto">
                                    <div className="d-flex justify-content-between" style={{ gap: '10px' }}>
                                        <button className="btn btn-primary w-100" onClick={() => handleSubmit()}>Submit</button>
                                        <Link to='/create-blog' className='w-100'><button className="w-100 btn btn-warning small">Skip</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetail