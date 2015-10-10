Session.setDefault("isOther", "Self");
Session.setDefault("sCity", "Please Select");
Session.setDefault("sState", "Please Select");

Template.createOfferPage.helpers({
    'isOtherChecked': function (event) {
        return (Session.get("isOther") === "Other");
    },
    city: function () {
        return ["Kolhapur", "Port Blair", "Adilabad", "Adoni", "Amadalavalasa", "Amalapuram", "Anakapalle", "Anantapur", "Badepalle", "Banganapalle", "Bapatla", "Bellampalle", "Bethamcherla", "Bhadrachalam", "Bhainsa", "Bheemunipatnam", "Bhimavaram", "Bhongir", "Bobbili", "Bodhan", "Chilakaluripet", "Chirala", "Chittoor", "Cuddapah", "Devarakonda", "Dharmavaram", "Eluru", "Farooqnagar", "Gadwal", "Gooty", "Gudivada", "Gudur", "Guntakal", "Guntur", "Hanuman Junction", "Hindupur", "Hyderabad", "Ichchapuram", "Jaggaiahpet", "Jagtial", "Jammalamadugu", "Jangaon", "Kadapa", "Kadiri", "Kagaznagar", "Kakinada", "Kalyandurg", "Kamareddy", "Kandukur", "Karimnagar", "Kavali", "Khammam", "Koratla", "Kothagudem", "Kothapeta", "Kovvur", "Kurnool", "Kyathampalle", "Macherla", "Machilipatnam", "Madanapalle", "Mahbubnagar", "Mancherial", "Mandamarri", "Mandapeta", "Manuguru", "Markapur", "Medak", "Miryalaguda", "Mogalthur", "Nagari", "Nagarkurnool", "Nandyal", "Narasapur", "Narasaraopet", "Narayanpet", "Narsipatnam", "Nellore", "Nidadavole", "Nirmal", "Nizamabad", "Nuzvid", "Ongole", "Palacole", "Palasa Kasibugga", "Palwancha", "Parvathipuram", "Pedana", "Peddapuram", "Pithapuram", "Pondur", "Ponnur", "Proddatur", "Punganur", "Puttur", "Rajahmundry", "Rajam", "Ramachandrapuram", "Ramagundam", "Rayachoti", "Rayadurg", "Renigunta", "Repalle", "Sadasivpet", "Salur", "Samalkot", "Sangareddy", "Sattenapalle", "Siddipet", "Singapur", "Sircilla", "Srikakulam", "Srikalahasti", "Suryapet", "Tadepalligudem", "Tadpatri", "Tandur", "Tanuku", "Tenali", "Tirupati", "Tuni", "Uravakonda", "Venkatagiri", "Vicarabad", "Vijayawada", "Vinukonda", "Visakhapatnam", "Vizianagaram", "Wanaparthy", "Warangal", "Yellandu", "Yemmiganur", "Yerraguntla", "Zahirabad", "Rajampet", "Along", "Bomdila", "Itanagar", "Naharlagun", "Pasighat", "Abhayapuri", "Amguri", "Anandnagaar", "Barpeta", "Barpeta Road", "Bilasipara", "Bongaigaon", "Dhekiajuli", "Dhubri", "Dibrugarh", "Digboi", "Diphu", "Dispur", "Gauripur", "Goalpara", "Golaghat", "Guwahati", "Haflong", "Hailakandi", "Hojai", "Jorhat", "Karimganj", "Kokrajhar", "Lanka", "Lumding", "Mangaldoi", "Mankachar", "Margherita", "Mariani", "Marigaon", "Nagaon", "Nalbari", "North Lakhimpur", "Rangia", "Sibsagar", "Silapathar", "Silchar", "Tezpur", "Tinsukia", "Amarpur", "Araria", "Areraj", "Arrah", "Asarganj", "Aurangabad", "Bagaha", "Bahadurganj", "Bairgania", "Bakhtiarpur", "Banka", "Banmankhi Bazar", "Barahiya", "Barauli", "Barbigha", "Barh", "Begusarai", "Behea", "Bettiah", "Bhabua", "Bhagalpur", "Bihar Sharif", "Bikramganj", "Bodh Gaya", "Buxar", "Chandan Bara", "Chanpatia", "Chhapra", "Colgong", "Dalsinghsarai", "Darbhanga", "Daudnagar", "Dehri-on-Sone", "Dhaka", "Dighwara", "Dumraon", "Fatwah", "Forbesganj", "Gaya", "Gogri Jamalpur", "Gopalganj", "Hajipur", "Hilsa", "Hisua", "Islampur", "Jagdispur", "Jamalpur", "Jamui", "Jehanabad", "Jhajha", "Jhanjharpur", "Jogabani", "Kanti", "Katihar", "Khagaria", "Kharagpur", "Kishanganj", "Lakhisarai", "Lalganj", "Madhepura", "Madhubani", "Maharajganj", "Mahnar Bazar", "Makhdumpur", "Maner", "Manihari", "Marhaura", "Masaurhi", "Mirganj", "Mokameh", "Motihari", "Motipur", "Munger", "Murliganj", "Muzaffarpur", "Narkatiaganj", "Naugachhia", "Nawada", "Nokha", "Patna", "Piro", "Purnia", "Rafiganj", "Rajgir", "Ramnagar", "Raxaul Bazar", "Revelganj", "Rosera", "Saharsa", "Samastipur", "Sasaram", "Sheikhpura", "Sheohar", "Sherghati", "Silao", "Sitamarhi", "Siwan", "Sonepur", "Sugauli", "Sultanganj", "Supaul", "Warisaliganj", "Ahiwara", "Akaltara", "Ambagarh Chowki", "Ambikapur", "Arang", "Bade Bacheli", "Balod", "Baloda Bazar", "Bemetra", "Bhatapara", "Bilaspur", "Birgaon", "Champa", "Chirmiri", "Dalli-Rajhara", "Dhamtari", "Dipka", "Dongargarh", "Durg-Bhilai Nagar", "Gobranawapara", "Jagdalpur", "Janjgir", "Jashpurnagar", "Kanker", "Kawardha", "Kondagaon", "Korba", "Mahasamund", "Mahendragarh", "Mungeli", "Naila Janjgir", "Raigarh", "Raipur", "Rajnandgaon", "Sakti", "Tilda Newra", "Amli", "Silvassa", "Daman and Diu", "Daman and Diu", "Asola", "Delhi", "Aldona", "Curchorem Cacora", "Madgaon", "Mapusa", "Margao", "Marmagao", "Panaji", "Ahmedabad", "Amreli", "Anand", "Ankleshwar", "Bharuch", "Bhavnagar", "Bhuj", "Cambay", "Dahod", "Deesa", "Dharampur", "Dholka", "Gandhinagar", "Godhra", "Himatnagar", "Idar", "Jamnagar", "Junagadh", "Kadi", "Kalavad", "Kalol", "Kapadvanj", "Karjan", "Keshod", "Khambhalia", "Khambhat", "Kheda", "Khedbrahma", "Kheralu", "Kodinar", "Lathi", "Limbdi", "Lunawada", "Mahesana", "Mahuva", "Manavadar", "Mandvi", "Mangrol", "Mansa", "Mehmedabad", "Modasa", "Morvi", "Nadiad", "Navsari", "Padra", "Palanpur", "Palitana", "Pardi", "Patan", "Petlad", "Porbandar", "Radhanpur", "Rajkot", "Rajpipla", "Rajula", "Ranavav", "Rapar", "Salaya", "Sanand", "Savarkundla", "Sidhpur", "Sihor", "Songadh", "Surat", "Talaja", "Thangadh", "Tharad", "Umbergaon", "Umreth", "Una", "Unjha", "Upleta", "Vadnagar", "Vadodara", "Valsad", "Vapi", "Vapi", "Veraval", "Vijapur", "Viramgam", "Visnagar", "Vyara", "Wadhwan", "Wankaner", "Adalaj", "Adityana", "Alang", "Ambaji", "Ambaliyasan", "Andada", "Anjar", "Anklav", "Antaliya", "Arambhada", "Atul", "Ballabhgarh", "Ambala", "Ambala", "Asankhurd", "Assandh", "Ateli", "Babiyal", "Bahadurgarh", "Barwala", "Bhiwani", "Charkhi Dadri", "Cheeka", "Ellenabad 2", "Faridabad", "Fatehabad", "Ganaur", "Gharaunda", "Gohana", "Gurgaon", "Haibat(Yamuna Nagar)", "Hansi", "Hisar", "Hodal", "Jhajjar", "Jind", "Kaithal", "Kalan Wali", "Kalka", "Karnal", "Ladwa", "Mahendragarh", "Mandi Dabwali", "Narnaul", "Narwana", "Palwal", "Panchkula", "Panipat", "Pehowa", "Pinjore", "Rania", "Ratia", "Rewari", "Rohtak", "Safidon", "Samalkha", "Shahbad", "Sirsa", "Sohna", "Sonipat", "Taraori", "Thanesar", "Tohana", "Yamunanagar", "Arki", "Baddi", "Bilaspur", "Chamba", "Dalhousie", "Dharamsala", "Hamirpur", "Mandi", "Nahan", "Shimla", "Solan", "Sundarnagar", "Jammu", "Achabbal", "Akhnoor", "Anantnag", "Arnia", "Awantipora", "Bandipore", "Baramula", "Kathua", "Leh", "Punch", "Rajauri", "Sopore", "Srinagar", "Udhampur", "Amlabad", "Ara", "Barughutu", "Bokaro Steel City", "Chaibasa", "Chakradharpur", "Chandrapura", "Chatra", "Chirkunda", "Churi", "Daltonganj", "Deoghar", "Dhanbad", "Dumka", "Garhwa", "Ghatshila", "Giridih", "Godda", "Gomoh", "Gumia", "Gumla", "Hazaribag", "Hussainabad", "Jamshedpur", "Jamtara", "Jhumri Tilaiya", "Khunti", "Lohardaga", "Madhupur", "Mihijam", "Musabani", "Pakaur", "Patratu", "Phusro", "Ramngarh", "Ranchi", "Sahibganj", "Saunda", "Simdega", "Tenu Dam-cum- Kathhara", "Arasikere", "Bangalore", "Belgaum", "Bellary", "Chamrajnagar", "Chikkaballapur", "Chintamani", "Chitradurga", "Gulbarga", "Gundlupet", "Hassan", "Hospet", "Hubli", "Karkala", "Karwar", "Kolar", "Kota", "Lakshmeshwar", "Lingsugur", "Maddur", "Madhugiri", "Madikeri", "Magadi", "Mahalingpur", "Malavalli", "Malur", "Mandya", "Mangalore", "Manvi", "Mudalgi", "Mudbidri", "Muddebihal", "Mudhol", "Mulbagal", "Mundargi", "Mysore", "Nanjangud", "Pavagada", "Puttur", "Rabkavi Banhatti", "Raichur", "Ramanagaram", "Ramdurg", "Ranibennur", "Robertson Pet", "Ron", "Sadalgi", "Sagar", "Sakleshpur", "Sandur", "Sankeshwar", "Saundatti-Yellamma", "Savanur", "Sedam", "Shahabad", "Shahpur", "Shiggaon", "Shikapur", "Shimoga", "Shorapur", "Shrirangapattana", "Sidlaghatta", "Sindgi", "Sindhnur", "Sira", "Sirsi", "Siruguppa", "Srinivaspur", "Talikota", "Tarikere", "Tekkalakota", "Terdal", "Tiptur", "Tumkur", "Udupi", "Vijayapura", "Wadi", "Yadgir", "Adoor", "Akathiyoor", "Alappuzha", "Ancharakandy", "Aroor", "Ashtamichira", "Attingal", "Avinissery", "Chalakudy", "Changanassery", "Chendamangalam", "Chengannur", "Cherthala", "Cheruthazham", "Chittur-Thathamangalam", "Chockli", "Erattupetta", "Guruvayoor", "Irinjalakuda", "Kadirur", "Kalliasseri", "Kalpetta", "Kanhangad", "Kanjikkuzhi", "Kannur", "Kasaragod", "Kayamkulam", "Kochi", "Kodungallur", "Kollam", "Koothuparamba", "Kothamangalam", "Kottayam", "Kozhikode", "Kunnamkulam", "Malappuram", "Mattannur", "Mavelikkara", "Mavoor", "Muvattupuzha", "Nedumangad", "Neyyattinkara", "Ottappalam", "Palai", "Palakkad", "Panniyannur", "Pappinisseri", "Paravoor", "Pathanamthitta", "Payyannur", "Peringathur", "Perinthalmanna", "Perumbavoor", "Ponnani", "Punalur", "Quilandy", "Shoranur", "Taliparamba", "Thiruvalla", "Thiruvananthapuram", "Thodupuzha", "Thrissur", "Tirur", "Vadakara", "Vaikom", "Varkala", "Kavaratti", "Ashok Nagar", "Balaghat", "Betul", "Bhopal", "Burhanpur", "Chhatarpur", "Dabra", "Datia", "Dewas", "Dhar", "Fatehabad", "Gwalior", "Indore", "Itarsi", "Jabalpur", "Katni", "Kotma", "Lahar", "Lundi", "Maharajpur", "Mahidpur", "Maihar", "Malajkhand", "Manasa", "Manawar", "Mandideep", "Mandla", "Mandsaur", "Mauganj", "Mhow Cantonment", "Mhowgaon", "Morena", "Multai", "Murwara", "Nagda", "Nainpur", "Narsinghgarh", "Narsinghgarh", "Neemuch", "Nepanagar", "Niwari", "Nowgong", "Nowrozabad", "Pachore", "Pali", "Panagar", "Pandhurna", "Panna", "Pasan", "Pipariya", "Pithampur", "Porsa", "Prithvipur", "Raghogarh-Vijaypur", "Rahatgarh", "Raisen", "Rajgarh", "Ratlam", "Rau", "Rehli", "Rewa", "Sabalgarh", "Sagar", "Sanawad", "Sarangpur", "Sarni", "Satna", "Sausar", "Sehore", "Sendhwa", "Seoni", "Seoni-Malwa", "Shahdol", "Shajapur", "Shamgarh", "Sheopur", "Shivpuri", "Shujalpur", "Sidhi", "Sihora", "Singrauli", "Sironj", "Sohagpur", "Tarana", "Tikamgarh", "Ujhani", "Ujjain", "Umaria", "Vidisha", "Wara Seoni", "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Baramati", "Chalisgaon", "Chinchani", "Devgarh", "Dhule", "Dombivli", "Durgapur", "Ichalkaranji", "Jalna", "Kalyan", "Latur", "Loha", "Lonar", "Lonavla", "Mahad", "Mahuli", "Malegaon", "Malkapur", "Manchar", "Mangalvedhe", "Mangrulpir", "Manjlegaon", "Manmad", "Manwath", "Mehkar", "Mhaswad", "Miraj", "Morshi", "Mukhed", "Mul", "Mumbai", "Murtijapur", "Nagpur", "Nalasopara", "Nanded-Waghala", "Nandgaon", "Nandura", "Nandurbar", "Narkhed", "Nashik", "Navi Mumbai", "Nawapur", "Nilanga", "Osmanabad", "Ozar", "Pachora", "Paithan", "Palghar", "Pandharkaoda", "Pandharpur", "Panvel", "Parbhani", "Parli", "Parola", "Partur", "Pathardi", "Pathri", "Patur", "Pauni", "Pen", "Phaltan", "Pulgaon", "Pune", "Purna", "Pusad", "Rahuri", "Rajura", "Ramtek", "Ratnagiri", "Raver", "Risod", "Sailu", "Sangamner", "Sangli", "Sangole", "Sasvad", "Satana", "Satara", "Savner", "Sawantwadi", "Shahade", "Shegaon", "Shendurjana", "Shirdi", "Shirpur-Warwade", "Shirur", "Shrigonda", "Shrirampur", "Sillod", "Sinnar", "Solapur", "Soyagaon", "Talegaon Dabhade", "Talode", "Tasgaon", "Tirora", "Tuljapur", "Tumsar", "Uran", "Uran Islampur", "Wadgaon Road", "Wai", "Wani", "Wardha", "Warora", "Warud", "Washim", "Yevla", "Uchgaon", "Udgir", "Umarga", "Umarkhed", "Umred", "Vadgaon Kasba", "Vaijapur", "Vasai", "Virar", "Vita", "Yavatmal", "Yawal", "Imphal", "Kakching", "Lilong", "Mayang Imphal", "Thoubal", "Jowai", "Nongstoin", "Shillong", "Tura", "Aizawl", "Champhai", "Lunglei", "Saiha", "Dimapur", "Kohima", "Mokokchung", "Tuensang", "Wokha", "Zunheboto", "Anandapur", "Anugul", "Asika", "Balangir", "Balasore", "Baleshwar", "Bamra", "Barbil", "Bargarh", "Bargarh", "Baripada", "Basudebpur", "Belpahar", "Bhadrak", "Bhawanipatna", "Bhuban", "Bhubaneswar", "Biramitrapur", "Brahmapur", "Brajrajnagar", "Byasanagar", "Cuttack", "Debagarh", "Dhenkanal", "Gunupur", "Hinjilicut", "Jagatsinghapur", "Jajapur", "Jaleswar", "Jatani", "Jeypur", "Jharsuguda", "Joda", "Kantabanji", "Karanjia", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Nabarangapur", "Paradip", "Parlakhemundi", "Pattamundai", "Phulabani", "Puri", "Rairangpur", "Rajagangapur", "Raurkela", "Rayagada", "Sambalpur", "Soro", "Sunabeda", "Sundargarh", "Talcher", "Titlagarh", "Umarkote", "Karaikal", "Mahe", "Pondicherry", "Yanam", "Ahmedgarh", "Amritsar", "Barnala", "Batala", "Bathinda", "Bhagha Purana", "Budhlada", "Chandigarh", "Dasua", "Dhuri", "Dinanagar", "Faridkot", "Fazilka", "Firozpur", "Firozpur Cantt.", "Giddarbaha", "Gobindgarh", "Gurdaspur", "Hoshiarpur", "Jagraon", "Jaitu", "Jalalabad", "Jalandhar", "Jalandhar Cantt.", "Jandiala", "Kapurthala", "Karoran", "Kartarpur", "Khanna", "Kharar", "Kot Kapura", "Kurali", "Longowal", "Ludhiana", "Malerkotla", "Malout", "Mansa", "Maur", "Moga", "Mohali", "Morinda", "Mukerian", "Muktsar", "Nabha", "Nakodar", "Nangal", "Nawanshahr", "Pathankot", "Patiala", "Patran", "Patti", "Phagwara", "Phillaur", "Qadian", "Raikot", "Rajpura", "Rampura Phul", "Rupnagar", "Samana", "Sangrur", "Sirhind Fatehgarh Sahib", "Sujanpur", "Sunam", "Talwara", "Tarn Taran", "Urmar Tanda", "Zira", "Zirakpur", "Bali", "Banswara", "Ajmer", "Alwar", "Bandikui", "Baran", "Barmer", "Bikaner", "Fatehpur", "Jaipur", "Jaisalmer", "Jodhpur", "Kota", "Lachhmangarh", "Ladnu", "Lakheri", "Lalsot", "Losal", "Makrana", "Malpura", "Mandalgarh", "Mandawa", "Mangrol", "Merta City", "Mount Abu", "Nadbai", "Nagar", "Nagaur", "Nargund", "Nasirabad", "Nathdwara", "Navalgund", "Nawalgarh", "Neem-Ka-Thana", "Nelamangala", "Nimbahera", "Nipani", "Niwai", "Nohar", "Nokha", "Pali", "Phalodi", "Phulera", "Pilani", "Pilibanga", "Pindwara", "Pipar City", "Prantij", "Pratapgarh", "Raisinghnagar", "Rajakhera", "Rajaldesar", "Rajgarh (Alwar)", "Rajgarh (Churu", "Rajsamand", "Ramganj Mandi", "Ramngarh", "Ratangarh", "Rawatbhata", "Rawatsar", "Reengus", "Sadri", "Sadulshahar", "Sagwara", "Sambhar", "Sanchore", "Sangaria", "Sardarshahar", "Sawai Madhopur", "Shahpura", "Shahpura", "Sheoganj", "Sikar", "Sirohi", "Sojat", "Sri Madhopur", "Sujangarh", "Sumerpur", "Suratgarh", "Taranagar", "Todabhim", "Todaraisingh", "Tonk", "Udaipur", "Udaipurwati", "Vijainagar", "Gangtok", "Calcutta", "Arakkonam", "Arcot", "Aruppukkottai", "Bhavani", "Chengalpattu", "Chennai", "Chinna salem", "Coimbatore", "Coonoor", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Gudalur", "Gudalur", "Gudalur", "Kanchipuram", "Karaikudi", "Karungal", "Karur", "Kollankodu", "Lalgudi", "Madurai", "Nagapattinam", "Nagercoil", "Namagiripettai", "Namakkal", "Nandivaram-Guduvancheri", "Nanjikottai", "Natham", "Nellikuppam", "Neyveli", "Oddanchatram", "P.N.Patti", "Pacode", "Padmanabhapuram", "Palani", "Palladam", "Pallapatti", "Pallikonda", "Panagudi", "Panruti", "Paramakudi", "Parangipettai", "Pattukkottai", "Perambalur", "Peravurani", "Periyakulam", "Periyasemur", "Pernampattu", "Pollachi", "Polur", "Ponneri", "Pudukkottai", "Pudupattinam", "Puliyankudi", "Punjaipugalur", "Rajapalayam", "Ramanathapuram", "Rameshwaram", "Rasipuram", "Salem", "Sankarankoil", "Sankari", "Sathyamangalam", "Sattur", "Shenkottai", "Sholavandan", "Sholingur", "Sirkali", "Sivaganga", "Sivagiri", "Sivakasi", "Srivilliputhur", "Surandai", "Suriyampalayam", "Tenkasi", "Thammampatti", "Thanjavur", "Tharamangalam", "Tharangambadi", "Theni Allinagaram", "Thirumangalam", "Thirunindravur", "Thiruparappu", "Thirupuvanam", "Thiruthuraipoondi", "Thiruvallur", "Thiruvarur", "Thoothukudi", "Thuraiyur", "Tindivanam", "Tiruchendur", "Tiruchengode", "Tiruchirappalli", "Tirukalukundram", "Tirukkoyilur", "Tirunelveli", "Tirupathur", "Tirupathur", "Tiruppur", "Tiruttani", "Tiruvannamalai", "Tiruvethipuram", "Tittakudi", "Udhagamandalam", "Udumalaipettai", "Unnamalaikadai", "Usilampatti", "Uthamapalayam", "Uthiramerur", "Vadakkuvalliyur", "Vadalur", "Vadipatti", "Valparai", "Vandavasi", "Vaniyambadi", "Vedaranyam", "Vellakoil", "Vellore", "Vikramasingapuram", "Viluppuram", "Virudhachalam", "Virudhunagar", "Viswanatham", "Agartala", "Badharghat", "Dharmanagar", "Indranagar", "Jogendranagar", "Kailasahar", "Khowai", "Pratapgarh", "Udaipur", "Achhnera", "Adari", "Agra", "Aligarh", "Allahabad", "Amroha", "Azamgarh", "Bahraich", "Ballia", "Balrampur", "Banda", "Bareilly", "Chandausi", "Dadri", "Deoria", "Etawah", "Fatehabad", "Fatehpur", "Fatehpur", "Greater Noida", "Hamirpur", "Hardoi", "Jajmau", "Jaunpur", "Jhansi", "Kalpi", "Kanpur", "Kota", "Laharpur", "Lakhimpur", "Lal Gopalganj Nindaura", "Lalganj", "Lalitpur", "Lar", "Loni", "Lucknow", "Mathura", "Meerut", "Modinagar", "Muradnagar", "Nagina", "Najibabad", "Nakur", "Nanpara", "Naraura", "Naugawan Sadat", "Nautanwa", "Nawabganj", "Nehtaur", "NOIDA", "Noorpur", "Obra", "Orai", "Padrauna", "Palia Kalan", "Parasi", "Phulpur", "Pihani", "Pilibhit", "Pilkhuwa", "Powayan", "Pukhrayan", "Puranpur", "Purquazi", "Purwa", "Rae Bareli", "Rampur", "Rampur Maniharan", "Rasra", "Rath", "Renukoot", "Reoti", "Robertsganj", "Rudauli", "Rudrapur", "Sadabad", "Safipur", "Saharanpur", "Sahaspur", "Sahaswan", "Sahawar", "Sahjanwa", "Saidpur", "Sambhal", "Samdhan", "Samthar", "Sandi", "Sandila", "Sardhana", "Seohara", "Shahabad", "Shahabad", "Shahganj", "Shahjahanpur", "Shamli", "Shamsabad", "Shamsabad", "Sherkot", "Shikarpur", "Shikohabad", "Shishgarh", "Siana", "Sikanderpur", "Sikandra Rao", "Sikandrabad", "Sirsaganj", "Sirsi", "Sitapur", "Soron", "Suar", "Sultanpur", "Sumerpur", "Tanda", "Tanda", "Tetri Bazar", "Thakurdwara", "Thana Bhawan", "Tilhar", "Tirwaganj", "Tulsipur", "Tundla", "Unnao", "Utraula", "Varanasi", "Vrindavan", "Warhapur", "Zaidpur", "Zamania", "Almora", "Bazpur", "Chamba", "Dehradun", "Haldwani", "Haridwar", "Jaspur", "Kashipur", "kichha", "Kotdwara", "Manglaur", "Mussoorie", "Nagla", "Nainital", "Pauri", "Pithoragarh", "Ramnagar", "Rishikesh", "Roorkee", "Rudrapur", "Sitarganj", "Tehri", "Muzaffarnagar", "Adra", "Alipurduar", "Arambagh", "Asansol", "Baharampur", "Bally", "Balurghat", "Bankura", "Barakar", "Barasat", "Bardhaman", "Bidhan Nagar", "Chinsura", "Contai", "Cooch Behar", "Darjeeling", "Durgapur", "Haldia", "Howrah", "Islampur", "Jhargram", "Kharagpur", "Kolkata", "Mainaguri", "Mal", "Mathabhanga", "Medinipur", "Memari", "Monoharpur", "Murshidabad", "Nabadwip", "Naihati", "Panchla", "Pandua", "Paschim Punropara", "Purulia", "Raghunathpur", "Raiganj", "Rampurhat", "Ranaghat", "Sainthia", "Santipur", "Siliguri", "Sonamukhi", "Srirampore", "Suri", "Taki", "Tamluk", "Tarakeswar", "Chikmagalur", "Davanagere", "Dharwad", "Gadag", "Chennai", "Coimbatore", "Barrackpur", "Barwani", "Basna", "Bawal", "Beawar", "Berhampur", "Bhajanpura", "Bhandara", "Bharatpur", "Bharthana", "Bhilai", "Bhilwara", "Bhinmal", "Bhiwandi", "Bhusawal", "Bidar", "Bijnaur", "Bilara", "Budaun", "Bulandshahr", "Burla", "Chakeri", "Champawat", "Chandil", "Chandrapur", "Chapirevula", "Charkhari", "Charkhi Dadri", "Chhindwara", "Chiplun", "Chitrakoot", "Churu", "Dalkhola", "Damoh", "Daund", "Dehgam", "Devgarh", "Dhulian", "Dumdum", "Dwarka1", "Etah", "Faizabad", "Falna", "Farrukhabad", "Fatehgarh", "Fatehpur Chaurasi", "Fatehpur Sikri", "Firozabad", "Gadchiroli", "Gandhidham", "Ganjam", "Ghatampur", "Ghatanji", "Ghaziabad", "Ghazipur", "Goa Velha", "Gokak", "Gondiya", "Gorakhpur", "Guna", "Hanumangarh", "Harda", "Harsawa", "Hastinapur", "Hathras", "Jagadhri", "Jais", "Jaitaran", "Jalgaon", "Jalore", "Jhabua", "Jhalawar", "Jhunjhunu", "Junnar", "Kailaras", "Kalburgi", "Kalimpong", "Kamthi", "Kanpur", "Karad", "Keylong", "Kheri", "Khurai", "Kodad", "Konnagar", "Krishnanagar", "Kuchinda", "Madhyamgram", "Mahabaleswar", "Mahoba", "Mahwa", "Manesar", "Mangalagiri", "Mira-Bhayandar", "Mirzapur", "Mithapur", "Mohania", "Mokama", "Moradabad", "Mukatsar", "Nagalapuram"]
    },
    state: function () {
        return ["ANDAMAN AND NICOBAR ISLANDS", "ANDHRA PRADESH", "ARUNACHAL PRADESH", "ASSAM", "BIHAR", "CHATTISGARH", "CHANDIGARH", "DAMAN AND DIU", "DELHI", "DADRA AND NAGAR HAVELI", "GOA", "GUJARAT", "HIMACHAL PRADESH", "HARYANA", "JAMMU AND KASHMIR", "JHARKHAND", "KERALA", "KARNATAKA", "LAKSHADWEEP", "MEGHALAYA", "MAHARASHTRA", "MANIPUR", "MADHYA PRADESH", "MIZORAM", "NAGALAND", "ORISSA", "PUNJAB", "PONDICHERRY", "RAJASTHAN", "SIKKIM", "TAMIL NADU", "TRIPURA", "UTTARAKHAND", "UTTAR PRADESH", "WEST BENGAL"]
    },

    getAddress: function () {
        var req = Session.get('userDetails');
        return (Session.get('userDetails'));
    },

    searchUser: function () {
        console.log("Search" + JSON.stringify(Session.get('searchResult')));
        return (Session.get('searchResult'));
    },
    userId: function () {
        console.log(Session.get('requestorId'));
        return (Session.get('requestorId'));
    }
});


Template.createOfferPage.events({
    'click .searchUser': function (event) {
        event.preventDefault();
        Meteor.call("SearchUser", document.getElementById("requestorId").value, function (error, result) {
            Session.set("searchResult", result);
        });
    },

    "change #selectedUser": function (event, template) {
        var requestorId = $(event.currentTarget).val();
        Session.set("requestorId", requestorId);
        console.log(Session.get("requestorId"));
        Meteor.call('getAddress', Session.get("requestorId"), function (err, result) {
            Session.set("userDetails", result);
            console.log("on rendered result:", JSON.stringify(result));
        });
    },

    'change #userType': function (event) {
        console.log(event.currentTarget.name);
        Session.set("isOther", event.currentTarget.value);
        console.log(Session.get("isOther"));
    }
    ,


    "change #scity-select": function (event, template) {
        var city = $(event.currentTarget).val();
        Session.set("sCity", city);
        console.log(Session.get("sCity"));
    }
    ,


    "change #sstate-select": function (event, template) {
        var state = $(event.currentTarget).val();
        Session.set("sState", state);
        console.log(Session.get("sState"));
    }
    ,

    'submit form': function (event) {
        event.preventDefault();
        var createOfferPage = {};


        if (event.target.userType.value === "Self") {
            createOfferPage.offerType = "Self";
            createOfferPage.creatorId = Meteor.userId();
            createOfferPage.volunteerId = Meteor.userId();
        } else {
            createOfferPage.offerType = "Other";
            createOfferPage.creatorId = Meteor.userId();
            createOfferPage.requestorId = event.target.requestorId.value;
        }
        createOfferPage.offerName = event.target.offerName.value;

        if (event.target.address1.checked) {
            createOfferPage.line1 = event.target.p_line1.value;
            createOfferPage.line2 = event.target.p_line2.value;
            createOfferPage.city =event.target.p_city.value;
            createOfferPage.state = event.target.p_state.value;
            createOfferPage.country = event.target.p_country.value;
            createOfferPage.pincode = event.target.p_pincode.value;
        } else {
            createOfferPage.line1 = event.target.s_line1.value;
            createOfferPage.line2 = event.target.s_line2.value;
            createOfferPage.city = Session.get("sCity");
            createOfferPage.state = Session.get("sState");
            createOfferPage.country = event.target.s_country.value;
            createOfferPage.pincode = event.target.s_pincode.value;
        }

        createOfferPage.aid = event.target.Aid.value;
        createOfferPage.fromDate = event.target.fromDate.value;
        createOfferPage.toDate = event.target.toDate.value;
        createOfferPage.comment = event.target.comment.value;
        Meteor.call("createOffer", createOfferPage);
        Router.go("/");
    }

})
;

Template.createOfferPage.onRendered(function () {
    console.log(Meteor.userId());
    Meteor.call('getAddress', Meteor.userId(), function (err, result) {
        Session.set("userDetails", result);
    });
});








