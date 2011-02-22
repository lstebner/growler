(function( $ ){
	$.fn.growlAlert = function(opts, data){
	    //settings for growl
		var settings = {
			autoShow : true,
			fadeTime : 600,
			delayTime : 1500,
			title : 'Growl Alert Title',
			content : 'This is the content for the growl alert test message, woo!',
			closeIcon : 'http://www.linnnk.com/demos/images/close-icon.png',
			onShow: null,
			onComplete: null,
			position: 'top-left'
		};
		
	    if (this.html() == ''){
    		this.html('<a href="#" class="close-link"><img src="' + settings.closeIcon + '" width="20px" height="20px" /></a><div class="title"></div><div class="content"></div>');
	    }
	    
		$self = this;
        $close = this.find('.close-link');
		$title = this.children('.title');
		$content = this.children('.content');
		
		//methods for growl
		methods = {
		    set: function(key, val){
		        switch(key){
		            case 'title':
		                $title.text(val);
		                break;
		            
		            case 'content':
		                $content.text(val);
		                break;
		                
		            case 'position':
		                $self.removeClass('top-left').removeClass('top-right').removeClass('bottom-left').removeClass('bottom-right').addClass(val);
		                break;
		        }
		    },
		    onComplete: function(callback){
		        if (settings.onComplete){
		            settings.onComplete();
		        }
		    },
		    onShow: function(){
		        if (settings.onShow){
		            settings.onShow();
		        }
		    },
			show : function(data){
			    if ($self.is(':visible')){
			        old = methods.onComplete();
			        methods.onComplete = function(){
                        if (old){
                            old();
                        }
                        
                        $self.growlAlert('show', data);
			        }
			    }
			    else{
    			    if (data){
    			        if (data.title){
                            methods.set('title', data.title);
    			        }
    			        if (data.content){
                            methods.set('content', data.content);
    			        }
    			        if (data.position){
    			            methods.set('position', data.position);
    		            }
		        
    			        $.extend(settings, data);
    			    }
		    
    				return $self.fadeIn(settings.fadeTime, function(){ methods.onShow(); })
    				            .delay(settings.delayTime)
    				            .fadeOut(settings.fadeTime, function(){ methods.onComplete(); });
    			}
			}
		};
		
		//if some sort of opts was passed in
		if (opts){
			//check to see if it's a method
			if (methods[opts]){
				return methods[opts](data);
			}
			//otherwise just treat it as options
			else{
				$.extend(settings, opts);
			}
		}
		
		if (!this.hasClass(settings.position)){
		    methods.set('position', settings.position);
		}
		
		//objects
		this.hide();
		
		//set the text
		methods.set('title', settings.title);
		methods.set('content', settings.content);
		
		//close button click
		$close.click(function(){
			//stop any animations running now
			$self.stop(true, true);
			//fade out the dialog
			$self.fadeOut(settings.fadeTime, function(){ methods.onComplete(); });
			//prevent default action on the close link
			return false;
		});
		
		//show immediately
		if (settings.autoShow){
		    return $self.growlAlert('show');
		}
	}
})( jQuery );