<?php

namespace App\Http\Controllers;

use App\Order;
use App\Mail\OrderShipped;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function sendEmail(Request $request)
        {
            $website = $request->site;
            $msg = $request->comment;
            $phone = $request->phone;
            $wholeMsg = "Website: $website | Phone: $phone | Message: $msg";
            Mail::raw($wholeMsg, function ($message) use ($request) {
                $message->to('michaelfami@gmail.com');
                $message->from($request->email, $request->name);
                $message->subject('CUSTOMER CONSULTANT REQUEST ');
            });
            $responseMsg = "Your message was successfully sent. We'll get in touch with you within 24 hours.";
            return $responseMsg;
        }


}
