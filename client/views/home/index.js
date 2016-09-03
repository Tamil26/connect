/**
 * Created by amusthafa on 10/10/2015.
 */
Meteor.startup(
    function () {
        var cityArr = ["Abhayapuri", "Achabbal", "Achhnera", "Adalaj", "Adari", "Adilabad", "Adityana", "Adoni", "Adoor", "Adra", "Agartala", "Agra", "Ahiwara", "Ahmedabad", "Ahmedgarh", "Ahmednagar", "Aizawl", "Ajmer", "Akaltara", "Akathiyoor", "Akhnoor", "Akola", "Alang", "Alappuzha", "Aldona", "Aligarh", "Alipurduar", "Allahabad", "Almora", "Along", "Alwar", "Amadalavalasa", "Amalapuram", "Amarpur", "Ambagarh Chowki", "Ambaji", "Ambala", "Ambaliyasan", "Ambikapur", "Amguri", "Amlabad", "Amli", "Amravati", "Amreli", "Amritsar", "Amroha", "Anakapalle", "Anand", "Anandapur", "Anandnagaar", "Anantapur", "Anantnag", "Ancharakandy", "Andada", "Anjar", "Anklav", "Ankleshwar", "Antaliya", "Anugul", "Ara", "Arakkonam", "Arambagh", "Arambhada", "Arang", "Araria", "Arasikere", "Arcot", "Areraj", "Arki", "Arnia", "Aroor", "Arrah", "Aruppukkottai", "Asankhurd", "Asansol", "Asarganj", "Ashok Nagar", "Ashtamichira", "Asika", "Asola", "Assandh", "Ateli", "Attingal", "Atul", "Aurangabad", "Avinissery", "Awantipora", "Azamgarh", "Babiyal", "Baddi", "Bade Bacheli", "Badepalle", "Badharghat", "Bagaha", "Bahadurganj", "Bahadurgarh", "Baharampur", "Bahraich", "Bairgania", "Bakhtiarpur", "Balaghat", "Balangir", "Balasore", "Baleshwar", "Bali", "Ballabhgarh", "Ballia", "Bally", "Balod", "Baloda Bazar", "Balrampur", "Balurghat", "Bamra", "Banda", "Bandikui", "Bandipore", "Bangalore", "Banganapalle", "Banka", "Bankura", "Banmankhi Bazar", "Banswara", "Bapatla", "Barahiya", "Barakar", "Baramati", "Baramula", "Baran", "Barasat", "Barauli", "Barbigha", "Barbil", "Bardhaman", "Bareilly", "Bargarh", "Barh", "Baripada", "Barmer", "Barnala", "Barpeta", "Barpeta Road", "Barrackpur", "Barughutu", "Barwala", "Barwani", "Basna", "Basudebpur", "Batala", "Bathinda", "Bawal", "Bazpur", "Beawar", "Begusarai", "Behea", "Belgaum", "Bellampalle", "Bellary", "Belpahar", "Bemetra", "Berhampur", "Bethamcherla", "Bettiah", "Betul", "Bhabua", "Bhadrachalam", "Bhadrak", "Bhagalpur", "Bhagha Purana", "Bhainsa", "Bhajanpura", "Bhandara", "Bharatpur", "Bharthana", "Bharuch", "Bhatapara", "Bhavani", "Bhavnagar", "Bhawanipatna", "Bheemunipatnam", "Bhilai", "Bhilwara", "Bhimavaram", "Bhinmal", "Bhiwandi", "Bhiwani", "Bhongir", "Bhopal", "Bhuban", "Bhubaneswar", "Bhuj", "Bhusawal", "Bidar", "Bidhan Nagar", "Bihar Sharif", "Bijnaur", "Bikaner", "Bikramganj", "Bilara", "Bilasipara", "Bilaspur", "Biramitrapur", "Birgaon", "Bobbili", "Bodh Gaya", "Bodhan", "Bokaro Steel City", "Bomdila", "Bongaigaon", "Brahmapur", "Brajrajnagar", "Budaun", "Budhlada", "Bulandshahr", "Burhanpur", "Burla", "Buxar", "Byasanagar", "Calcutta", "Cambay", "Chaibasa", "Chakeri", "Chakradharpur", "Chalakudy", "Chalisgaon", "Chamba", "Champa", "Champawat", "Champhai", "Chamrajnagar", "Chandan Bara", "Chandausi", "Chandigarh", "Chandil", "Chandrapur", "Chandrapura", "Changanassery", "Chanpatia", "Chapirevula", "Charkhari", "Charkhi Dadri", "Chatra", "Cheeka", "Chendamangalam", "Chengalpattu", "Chengannur", "Chennai", "Cherthala", "Cheruthazham", "Chhapra", "Chhatarpur", "Chhindwara", "Chikkaballapur", "Chikmagalur", "Chilakaluripet", "Chinchani", "Chinna salem", "Chinsura", "Chintamani", "Chiplun", "Chirala", "Chirkunda", "Chirmiri", "Chitradurga", "Chitrakoot", "Chittoor", "Chittur-Thathamangalam", "Chockli", "Churi", "Churu", "Coimbatore", "Colgong", "Contai", "Cooch Behar", "Coonoor", "Cuddalore", "Cuddapah", "Curchorem Cacora", "Cuttack", "Dabra", "Dadri", "Dahod", "Dalhousie", "Dalkhola", "Dalli-Rajhara", "Dalsinghsarai", "Daltonganj", "Daman and Diu", "Damoh", "Darbhanga", "Darjeeling", "Dasua", "Datia", "Daudnagar", "Daund", "Davanagere", "Debagarh", "Deesa", "Dehgam", "Dehradun", "Dehri-on-Sone", "Delhi", "Deoghar", "Deoria", "Devarakonda", "Devgarh", "Dewas", "Dhaka", "Dhamtari", "Dhanbad", "Dhar", "Dharampur", "Dharamsala", "Dharmanagar", "Dharmapuri", "Dharmavaram", "Dharwad", "Dhekiajuli", "Dhenkanal", "Dholka", "Dhubri", "Dhule", "Dhulian", "Dhuri", "Dibrugarh", "Digboi", "Dighwara", "Dimapur", "Dinanagar", "Dindigul", "Diphu", "Dipka", "Dispur", "Dombivli", "Dongargarh", "Dumdum", "Dumka", "Dumraon", "Durgapur", "Durg-Bhilai Nagar", "Dwarka1", "Ellenabad 2", "Eluru", "Erattupetta", "Erode", "Etah", "Etawah", "Faizabad", "Falna", "Faridabad", "Faridkot", "Farooqnagar", "Farrukhabad", "Fatehabad", "Fatehgarh", "Fatehpur", "Fatehpur Chaurasi", "Fatehpur Sikri", "Fatwah", "Fazilka", "Firozabad", "Firozpur", "Firozpur Cantt.", "Forbesganj", "Gadag", "Gadchiroli", "Gadwal", "Ganaur", "Gandhidham", "Gandhinagar", "Gangtok", "Ganjam", "Garhwa", "Gauripur", "Gaya", "Gharaunda", "Ghatampur", "Ghatanji", "Ghatshila", "Ghaziabad", "Ghazipur", "Giddarbaha", "Giridih", "Goa Velha", "Goalpara", "Gobindgarh", "Gobranawapara", "Godda", "Godhra", "Gogri Jamalpur", "Gohana", "Gokak", "Golaghat", "Gomoh", "Gondiya", "Gooty", "Gopalganj", "Gorakhpur", "Greater Noida", "Gudalur", "Gudivada", "Gudur", "Gulbarga", "Gumia", "Gumla", "Guna", "Gundlupet", "Guntakal", "Guntur", "Gunupur", "Gurdaspur", "Gurgaon", "Guruvayoor", "Guwahati", "Gwalior", "Haflong", "Haibat(Yamuna Nagar)", "Hailakandi", "Hajipur", "Haldia", "Haldwani", "Hamirpur", "Hansi", "Hanuman Junction", "Hanumangarh", "Harda", "Hardoi", "Haridwar", "Harsawa", "Hassan", "Hastinapur", "Hathras", "Hazaribag", "Hilsa", "Himatnagar", "Hindupur", "Hinjilicut", "Hisar", "Hisua", "Hodal", "Hojai", "Hoshiarpur", "Hospet", "Howrah", "Hubli", "Hussainabad", "Hyderabad", "Ichalkaranji", "Ichchapuram", "Idar", "Imphal", "Indore", "Indranagar", "Irinjalakuda", "Islampur", "Itanagar", "Itarsi", "Jabalpur", "Jagadhri", "Jagatsinghapur", "Jagdalpur", "Jagdispur", "Jaggaiahpet", "Jagraon", "Jagtial", "Jaipur", "Jais", "Jaisalmer", "Jaitaran", "Jaitu", "Jajapur", "Jajmau", "Jalalabad", "Jalandhar", "Jalandhar Cantt.", "Jaleswar", "Jalgaon", "Jalna", "Jalore", "Jamalpur", "Jammalamadugu", "Jammu", "Jamnagar", "Jamshedpur", "Jamtara", "Jamui", "Jandiala", "Jangaon", "Janjgir", "Jashpurnagar", "Jaspur", "Jatani", "Jaunpur", "Jehanabad", "Jeypur", "Jhabua", "Jhajha", "Jhajjar", "Jhalawar", "Jhanjharpur", "Jhansi", "Jhargram", "Jharsuguda", "Jhumri Tilaiya", "Jhunjhunu", "Jind", "Joda", "Jodhpur", "Jogabani", "Jogendranagar", "Jorhat", "Jowai", "Junagadh", "Junnar", "Kadapa", "Kadi", "Kadiri", "Kadirur", "Kagaznagar", "Kailaras", "Kailasahar", "Kaithal", "Kakching", "Kakinada", "Kalan Wali", "Kalavad", "Kalburgi", "Kalimpong", "Kalka", "Kalliasseri", "Kalol", "Kalpetta", "Kalpi", "Kalyan", "Kalyandurg", "Kamareddy", "Kamthi", "Kanchipuram", "Kandukur", "Kanhangad", "Kanjikkuzhi", "Kanker", "Kannur", "Kanpur", "Kantabanji", "Kanti", "Kapadvanj", "Kapurthala", "Karad", "Karaikal", "Karaikudi", "Karanjia", "Karimganj", "Karimnagar", "Karjan", "Karkala", "Karnal", "Karoran", "Kartarpur", "Karungal", "Karur", "Karwar", "Kasaragod", "Kashipur", "Kathua", "Katihar", "Katni", "Kavali", "Kavaratti", "Kawardha", "Kayamkulam", "Kendrapara", "Kendujhar", "Keshod", "Keylong", "Khagaria", "Khambhalia", "Khambhat", "Khammam", "Khanna", "Kharagpur", "Kharar", "Kheda", "Khedbrahma", "Kheralu", "Kheri", "Khordha", "Khowai", "Khunti", "Khurai", "kichha", "Kishanganj", "Kochi", "Kodad", "Kodinar", "Kodungallur", "Kohima", "Kokrajhar", "Kolar", "Kolhapur", "Kolkata", "Kollam", "Kollankodu", "Kondagaon", "Konnagar", "Koothuparamba", "Koraput", "Koratla", "Korba", "Kot Kapura", "Kota", "Kotdwara", "Kothagudem", "Kothamangalam", "Kothapeta", "Kotma", "Kottayam", "Kovvur", "Kozhikode", "Krishnanagar", "Kuchinda", "Kunnamkulam", "Kurali", "Kurnool", "Kyathampalle", "Lachhmangarh", "Ladnu", "Ladwa", "Lahar", "Laharpur", "Lakheri", "Lakhimpur", "Lakhisarai", "Lakshmeshwar", "Lal Gopalganj Nindaura", "Lalganj", "Lalgudi", "Lalitpur", "Lalsot", "Lanka", "Lar", "Lathi", "Latur", "Leh", "Lilong", "Limbdi", "Lingsugur", "Loha", "Lohardaga", "Lonar", "Lonavla", "Longowal", "Loni", "Losal", "Lucknow", "Ludhiana", "Lumding", "Lunawada", "Lundi", "Lunglei", "Macherla", "Machilipatnam", "Madanapalle", "Maddur", "Madgaon", "Madhepura", "Madhubani", "Madhugiri", "Madhupur", "Madhyamgram", "Madikeri", "Madurai", "Magadi", "Mahabaleswar", "Mahad", "Mahalingpur", "Maharajganj", "Maharajpur", "Mahasamund", "Mahbubnagar", "Mahe", "Mahendragarh", "Mahesana", "Mahidpur", "Mahnar Bazar", "Mahoba", "Mahuli", "Mahuva", "Mahwa", "Maihar", "Mainaguri", "Makhdumpur", "Makrana", "Mal", "Malajkhand", "Malappuram", "Malavalli", "Malegaon", "Malerkotla", "Malkangiri", "Malkapur", "Malout", "Malpura", "Malur", "Manasa", "Manavadar", "Manawar", "Manchar", "Mancherial", "Mandalgarh", "Mandamarri", "Mandapeta", "Mandawa", "Mandi", "Mandi Dabwali", "Mandideep", "Mandla", "Mandsaur", "Mandvi", "Mandya", "Maner", "Manesar", "Mangalagiri", "Mangaldoi", "Mangalore", "Mangalvedhe", "Manglaur", "Mangrol", "Mangrulpir", "Manihari", "Manjlegaon", "Mankachar", "Manmad", "Mansa", "Manuguru", "Manvi", "Manwath", "Mapusa", "Margao", "Margherita", "Marhaura", "Mariani", "Marigaon", "Markapur", "Marmagao", "Masaurhi", "Mathabhanga", "Mathura", "Mattannur", "Mauganj", "Maur", "Mavelikkara", "Mavoor", "Mayang Imphal", "Medak", "Medinipur", "Meerut", "Mehkar", "Mehmedabad", "Memari", "Merta City", "Mhaswad", "Mhow Cantonment", "Mhowgaon", "Mihijam", "Mira-Bhayandar", "Miraj", "Mirganj", "Miryalaguda", "Mirzapur", "Mithapur", "Modasa", "Modinagar", "Moga", "Mogalthur", "Mohali", "Mohania", "Mokama", "Mokameh", "Mokokchung", "Monoharpur", "Moradabad", "Morena", "Morinda", "Morshi", "Morvi", "Motihari", "Motipur", "Mount Abu", "Mudalgi", "Mudbidri", "Muddebihal", "Mudhol", "Mukatsar", "Mukerian", "Mukhed", "Muktsar", "Mul", "Mulbagal", "Multai", "Mumbai", "Mundargi", "Mungeli", "Munger", "Muradnagar", "Murliganj", "Murshidabad", "Murtijapur", "Murwara", "Musabani", "Mussoorie", "Muvattupuzha", "Muzaffarnagar", "Muzaffarpur", "Mysore", "Nabadwip", "Nabarangapur", "Nabha", "Nadbai", "Nadiad", "Nagalapuram", "Nagaon", "Nagapattinam", "Nagar", "Nagari", "Nagarkurnool", "Nagaur", "Nagda", "Nagercoil", "Nagina", "Nagla", "Nagpur", "Nahan", "Naharlagun", "Naihati", "Naila Janjgir", "Nainital", "Nainpur", "Najibabad", "Nakodar", "Nakur", "Nalasopara", "Nalbari", "Namagiripettai", "Namakkal", "Nanded-Waghala", "Nandgaon", "Nandivaram-Guduvancheri", "Nandura", "Nandurbar", "Nandyal", "Nangal", "Nanjangud", "Nanjikottai", "Nanpara", "Narasapur", "Narasaraopet", "Naraura", "Narayanpet", "Nargund", "Narkatiaganj", "Narkhed", "Narnaul", "Narsinghgarh", "Narsipatnam", "Narwana", "Nashik", "Nasirabad", "Natham", "Nathdwara", "Naugachhia", "Naugawan Sadat", "Nautanwa", "Navalgund", "Navi Mumbai", "Navsari", "Nawabganj", "Nawada", "Nawalgarh", "Nawanshahr", "Nawapur", "Nedumangad", "Neem-Ka-Thana", "Neemuch", "Nehtaur", "Nelamangala", "Nellikuppam", "Nellore", "Nepanagar", "Neyveli", "Neyyattinkara", "Nidadavole", "Nilanga", "Nimbahera", "Nipani", "Nirmal", "Niwai", "Niwari", "Nizamabad", "Nohar", "NOIDA", "Nokha", "Nongstoin", "Noorpur", "North Lakhimpur", "Nowgong", "Nowrozabad", "Nuzvid", "Obra", "Oddanchatram", "Ongole", "Orai", "Osmanabad", "Ottappalam", "Ozar", "P.N.Patti", "Pachora", "Pachore", "Pacode", "Padmanabhapuram", "Padra", "Padrauna", "Paithan", "Pakaur", "Palacole", "Palai", "Palakkad", "Palani", "Palanpur", "Palasa Kasibugga", "Palghar", "Pali", "Palia Kalan", "Palitana", "Palladam", "Pallapatti", "Pallikonda", "Palwal", "Palwancha", "Panagar", "Panagudi", "Panaji", "Panchkula", "Panchla", "Pandharkaoda", "Pandharpur", "Pandhurna", "Pandua", "Panipat", "Panna", "Panniyannur", "Panruti", "Panvel", "Pappinisseri", "Paradip", "Paramakudi", "Parangipettai", "Parasi", "Paravoor", "Parbhani", "Pardi", "Parlakhemundi", "Parli", "Parola", "Partur", "Parvathipuram", "Pasan", "Paschim Punropara", "Pasighat", "Patan", "Pathanamthitta", "Pathankot", "Pathardi", "Pathri", "Patiala", "Patna", "Patran", "Patratu", "Pattamundai", "Patti", "Pattukkottai", "Patur", "Pauni", "Pauri", "Pavagada", "Payyannur", "Pedana", "Peddapuram", "Pehowa", "Pen", "Perambalur", "Peravurani", "Peringathur", "Perinthalmanna", "Periyakulam", "Periyasemur", "Pernampattu", "Perumbavoor", "Petlad", "Phagwara", "Phalodi", "Phaltan", "Phillaur", "Phulabani", "Phulera", "Phulpur", "Phusro", "Pihani", "Pilani", "Pilibanga", "Pilibhit", "Pilkhuwa", "Pindwara", "Pinjore", "Pipar City", "Pipariya", "Piro", "Pithampur", "Pithapuram", "Pithoragarh", "Pollachi", "Polur", "Pondicherry", "Pondur", "Ponnani", "Ponneri", "Ponnur", "Porbandar", "Porsa", "Port Blair", "Powayan", "Prantij", "Pratapgarh", "Prithvipur", "Proddatur", "Pudukkottai", "Pudupattinam", "Pukhrayan", "Pulgaon", "Puliyankudi", "Punalur", "Punch", "Pune", "Punganur", "Punjaipugalur", "Puranpur", "Puri", "Purna", "Purnia", "Purquazi", "Purulia", "Purwa", "Pusad", "Puttur", "Qadian", "Quilandy", "Rabkavi Banhatti", "Radhanpur", "Rae Bareli", "Rafiganj", "Raghogarh-Vijaypur", "Raghunathpur", "Rahatgarh", "Rahuri", "Raichur", "Raiganj", "Raigarh", "Raikot", "Raipur", "Rairangpur", "Raisen", "Raisinghnagar", "Rajagangapur", "Rajahmundry", "Rajakhera", "Rajaldesar", "Rajam", "Rajampet", "Rajapalayam", "Rajauri", "Rajgarh", "Rajgarh (Alwar)", "Rajgarh (Churu", "Rajgir", "Rajkot", "Rajnandgaon", "Rajpipla", "Rajpura", "Rajsamand", "Rajula", "Rajura", "Ramachandrapuram", "Ramagundam", "Ramanagaram", "Ramanathapuram", "Ramdurg", "Rameshwaram", "Ramganj Mandi", "Ramnagar", "Ramngarh", "Rampur", "Rampur Maniharan", "Rampura Phul", "Rampurhat", "Ramtek", "Ranaghat", "Ranavav", "Ranchi", "Rangia", "Rania", "Ranibennur", "Rapar", "Rasipuram", "Rasra", "Ratangarh", "Rath", "Ratia", "Ratlam", "Ratnagiri", "Rau", "Raurkela", "Raver", "Rawatbhata", "Rawatsar", "Raxaul Bazar", "Rayachoti", "Rayadurg", "Rayagada", "Reengus", "Rehli", "Renigunta", "Renukoot", "Reoti", "Repalle", "Revelganj", "Rewa", "Rewari", "Rishikesh", "Risod", "Robertsganj", "Robertson Pet", "Rohtak", "Ron", "Roorkee", "Rosera", "Rudauli", "Rudrapur", "Rupnagar", "Sabalgarh", "Sadabad", "Sadalgi", "Sadasivpet", "Sadri", "Sadulshahar", "Safidon", "Safipur", "Sagar", "Sagwara", "Saharanpur", "Saharsa", "Sahaspur", "Sahaswan", "Sahawar", "Sahibganj", "Sahjanwa", "Saidpur", "Saiha", "Sailu", "Sainthia", "Sakleshpur", "Sakti", "Salaya", "Salem", "Salur", "Samalkha", "Samalkot", "Samana", "Samastipur", "Sambalpur", "Sambhal", "Sambhar", "Samdhan", "Samthar", "Sanand", "Sanawad", "Sanchore", "Sandi", "Sandila", "Sandur", "Sangamner", "Sangareddy", "Sangaria", "Sangli", "Sangole", "Sangrur", "Sankarankoil", "Sankari", "Sankeshwar", "Santipur", "Sarangpur", "Sardarshahar", "Sardhana", "Sarni", "Sasaram", "Sasvad", "Satana", "Satara", "Sathyamangalam", "Satna", "Sattenapalle", "Sattur", "Saunda", "Saundatti-Yellamma", "Sausar", "Savanur", "Savarkundla", "Savner", "Sawai Madhopur", "Sawantwadi", "Sedam", "Sehore", "Sendhwa", "Seohara", "Seoni", "Seoni-Malwa", "Shahabad", "Shahade", "Shahbad", "Shahdol", "Shahganj", "Shahjahanpur", "Shahpur", "Shahpura", "Shajapur", "Shamgarh", "Shamli", "Shamsabad", "Shegaon", "Sheikhpura", "Shendurjana", "Shenkottai", "Sheoganj", "Sheohar", "Sheopur", "Sherghati", "Sherkot", "Shiggaon", "Shikapur", "Shikarpur", "Shikohabad", "Shillong", "Shimla", "Shimoga", "Shirdi", "Shirpur-Warwade", "Shirur", "Shishgarh", "Shivpuri", "Sholavandan", "Sholingur", "Shoranur", "Shorapur", "Shrigonda", "Shrirampur", "Shrirangapattana", "Shujalpur", "Siana", "Sibsagar", "Siddipet", "Sidhi", "Sidhpur", "Sidlaghatta", "Sihor", "Sihora", "Sikanderpur", "Sikandra Rao", "Sikandrabad", "Sikar", "Silao", "Silapathar", "Silchar", "Siliguri", "Sillod", "Silvassa", "Simdega", "Sindgi", "Sindhnur", "Singapur", "Singrauli", "Sinnar", "Sira", "Sircilla", "Sirhind Fatehgarh Sahib", "Sirkali", "Sirohi", "Sironj", "Sirsa", "Sirsaganj", "Sirsi", "Siruguppa", "Sitamarhi", "Sitapur", "Sitarganj", "Sivaganga", "Sivagiri", "Sivakasi", "Siwan", "Sohagpur", "Sohna", "Sojat", "Solan", "Solapur", "Sonamukhi", "Sonepur", "Songadh", "Sonipat", "Sopore", "Soro", "Soron", "Soyagaon", "Sri Madhopur", "Srikakulam", "Srikalahasti", "Srinagar", "Srinivaspur", "Srirampore", "Srivilliputhur", "Suar", "Sugauli", "Sujangarh", "Sujanpur", "Sultanganj", "Sultanpur", "Sumerpur", "Sunabeda", "Sunam", "Sundargarh", "Sundarnagar", "Supaul", "Surandai", "Surat", "Suratgarh", "Suri", "Suriyampalayam", "Suryapet", "Tadepalligudem", "Tadpatri", "Taki", "Talaja", "Talcher", "Talegaon Dabhade", "Talikota", "Taliparamba", "Talode", "Talwara", "Tamluk", "Tanda", "Tandur", "Tanuku", "Tarakeswar", "Tarana", "Taranagar", "Taraori", "Tarikere", "Tarn Taran", "Tasgaon", "Tehri", "Tekkalakota", "Tenali", "Tenkasi", "Tenu Dam-cum- Kathhara", "Terdal", "Tetri Bazar", "Tezpur", "Thakurdwara", "Thammampatti", "Thana Bhawan", "Thanesar", "Thangadh", "Thanjavur", "Tharad", "Tharamangalam", "Tharangambadi", "Theni Allinagaram", "Thirumangalam", "Thirunindravur", "Thiruparappu", "Thirupuvanam", "Thiruthuraipoondi", "Thiruvalla", "Thiruvallur", "Thiruvananthapuram", "Thiruvarur", "Thodupuzha", "Thoothukudi", "Thoubal", "Thrissur", "Thuraiyur", "Tikamgarh", "Tilda Newra", "Tilhar", "Tindivanam", "Tinsukia", "Tiptur", "Tirora", "Tiruchendur", "Tiruchengode", "Tiruchirappalli", "Tirukalukundram", "Tirukkoyilur", "Tirunelveli", "Tirupathur", "Tirupati", "Tiruppur", "Tirur", "Tiruttani", "Tiruvannamalai", "Tiruvethipuram", "Tirwaganj", "Titlagarh", "Tittakudi", "Todabhim", "Todaraisingh", "Tohana", "Tonk", "Tuensang", "Tuljapur", "Tulsipur", "Tumkur", "Tumsar", "Tundla", "Tuni", "Tura", "Uchgaon", "Udaipur", "Udaipurwati", "Udgir", "Udhagamandalam", "Udhampur", "Udumalaipettai", "Udupi", "Ujhani", "Ujjain", "Umarga", "Umaria", "Umarkhed", "Umarkote", "Umbergaon", "Umred", "Umreth", "Una", "Unjha", "Unnamalaikadai", "Unnao", "Upleta", "Uran", "Uran Islampur", "Uravakonda", "Urmar Tanda", "Usilampatti", "Uthamapalayam", "Uthiramerur", "Utraula", "Vadakara", "Vadakkuvalliyur", "Vadalur", "Vadgaon Kasba", "Vadipatti", "Vadnagar", "Vadodara", "Vaijapur", "Vaikom", "Valparai", "Valsad", "Vandavasi", "Vaniyambadi", "Vapi", "Varanasi", "Varkala", "Vasai", "Vedaranyam", "Vellakoil", "Vellore", "Venkatagiri", "Veraval", "Vicarabad", "Vidisha", "Vijainagar", "Vijapur", "Vijayapura", "Vijayawada", "Vikramasingapuram", "Viluppuram", "Vinukonda", "Viramgam", "Virar", "Virudhachalam", "Virudhunagar", "Visakhapatnam", "Visnagar", "Viswanatham", "Vita", "Vizianagaram", "Vrindavan", "Vyara", "Wadgaon Road", "Wadhwan", "Wadi", "Wai", "Wanaparthy", "Wani", "Wankaner", "Wara Seoni", "Warangal", "Wardha", "Warhapur", "Warisaliganj", "Warora", "Warud", "Washim", "Wokha", "Yadgir", "Yamunanagar", "Yanam", "Yavatmal", "Yawal", "Yellandu", "Yemmiganur", "Yerraguntla", "Yevla", "Zahirabad", "Zaidpur", "Zamania", "Zira", "Zirakpur", "Zunheboto"];
        var stateArr = ["ANDAMAN AND NICOBAR ISLANDS", "ANDHRA PRADESH", "ARUNACHAL PRADESH", "ASSAM", "BIHAR", "CHANDIGARH", "CHATTISGARH", "DADRA AND NAGAR HAVELI", "DAMAN AND DIU", "DELHI", "GOA", "GUJARAT", "HARYANA", "HIMACHAL PRADESH", "JAMMU AND KASHMIR", "JHARKHAND", "KARNATAKA", "KERALA", "LAKSHADWEEP", "MADHYA PRADESH", "MAHARASHTRA", "MANIPUR", "MEGHALAYA", "MIZORAM", "NAGALAND", "ORISSA", "PONDICHERRY", "PUNJAB", "RAJASTHAN", "SIKKIM", "TAMIL NADU", "TRIPURA", "UTTAR PRADESH", "UTTARAKHAND", "WEST BENGAL"];
        var infotypeArr = ['Hospitals/Doctors', 'Ailments', 'Education', 'Jobs', 'Rights'];

        Meteor.call("getAid", function (error, result) {

            if (!error)
            {   Session.set("aidList", result);

            }

        });
        Session.set("cityList", cityArr);
        Session.set("stateList", stateArr);
        Session.set("typeList", infotypeArr);

        Meteor.call('getNotifications', function (err, result) {
            if (err) {
                alert("error" + error);
            } else {

                var res = [];
                var count = [];
                for (var i in result) {
                    not = result[i];
                    for (var x in not.notification) {
                        resfinal = not.notification[x];
                        res.push(resfinal);
                    }

                    for (var y in not.count) {
                        countFinal = not.count[y];
                        console.log("Count" + countFinal);
                        count.push(countFinal);
                    }
                }
                Session.set('notifications', res);
                Session.set('count', count);
            }
        });

        // {timeout: 5000 , beep : { error: 'error.mp3',
        //     success: 'success.mp3'}, position: 'top', effect: 'slide'}

        sAlert.config({
        effect: '',
        position: 'top',
        timeout: 4000,
        html: false,
        onRouteClose: false,
        stack: true,
        offset: 0,
        beep: {
          success : 'alerts/success.mp3',
          error : 'alerts/error.mp3'
        }
        });
    });
