function initMap(frm, divID, autoComplete) {
    if (frm) {
        // Declare map, marker, and autocomplete as global variables        
        let autocomplete;        

        if (jQuery(`#${autoComplete}`).length) {
            autocomplete = new google.maps.places.Autocomplete(
                document.getElementById(autoComplete), {
                types: ["geocode"]
            }
            );
            // console.log("autocomplete",autocomplete)
            autocomplete.addListener("place_changed", get_cordinates);
        }

        function get_cordinates(){
            const place = autocomplete.getPlace()
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            frm.doc.custom_coordinates_ = `${lat},${lng}`;
            frm.refresh_fields();
        }        

        
    }
    
}

frappe.ui.form.on('Shift Type', {
    refresh: function(frm) {

        console.log("custom js from hooks called");
        $(frm.fields_dict.custom_address_bar.wrapper).html('')
        // google map render start
        console.log('html field set 1')
        const html=`<!doctype html>
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <input class="form-control" placeholder="Search a location" id="autocomplete-address-source" style="height: 30px;margin-bottom: 5px;">
                    <div class="tab-content" title="map" style="text-align: center;padding: 4px;">                       
                    </div>
                </body>
            </html>
        `;
        // console.log('html field set 2')
        $(frm.fields_dict.custom_address_bar.wrapper).html(html);
        // console.log('html field set')
        setTimeout(()=>{
            $(frm.fields_dict.custom_address_bar.wrapper).html(html);
            initMap(frm, "map_source", "autocomplete-address-source");
        }, 500);
        // google map render end
    }, 
})